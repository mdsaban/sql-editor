<template>
  <div>
    <v-row no-gutters>
      <v-col cols="4" class="height-100">
        <div class="px-4 pt-1 height-100">
          <v-btn-toggle v-model="tab" tile color="primary" mandatory group class="mb-1">
            <v-btn :ripple="false" value="queries" class="height-40">
              Saved queries
            </v-btn>
            <v-btn :ripple="false" value="dataTable" class="height-40">
              Data Tables
            </v-btn>
          </v-btn-toggle>

          <SavedQueries v-if="tab == 'queries'" class="ml-2"/>
          <DataTables v-if="tab == 'dataTable'" />

        </div>
      </v-col>
      <v-col cols="8" class="pt-2">
        <EditorTabs :key="reRenderTabsCount"/>
        <SqlEditor @runQuery="fetchQueryResult" @saveQuery="reRenderTabsCount++"/>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="py-2 px-4">
      <client-only>
        <Table v-if="resultData.length" :data="resultData"/>
        <div v-else class="text-center">
          <img src="/search.svg" width="60px" height="60px" class="mt-12">
          <div class="text--20 font-weight--400 mt-2"> Here's where your results will appear </div>
          <div class="grey--text">(Select a saved query, and click on "Run Query" button)</div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import SavedQueries from '~/components/SavedQueries.vue';
import DataTables from '~/components/DataTables.vue';
import SqlEditor from '~/components/SqlEditor.vue';
import Table from "~/components/Table.vue"
import EditorTabs from '~/components/EditorTabs.vue';
import order from '@/data/orders.json'
import customers from '@/data/customers.json'
import products from '@/data/products.json'

export default {
  components: { Table, SavedQueries, SqlEditor, DataTables, EditorTabs },
  data() {
    return {
      tab: 'queries',
      resultData: [],
      reRenderTabsCount: 0
    }
  },
  methods: {
    async fetchQueryResult(queryId) {
      // This will be replaced by actual API call
      let queryIdToDataMap = {
        1: order,
        2: customers,
        3: products,
      }
      try {
        if(!queryIdToDataMap[queryId]) this.resultData = []
        let res = queryIdToDataMap[queryId]
        this.resultData = res.map(item => this.$globalFunctions.flattenObject(item))
      } catch(err) {
        console.log(err)
      }
    }
  },
}
</script>

<style></style>
