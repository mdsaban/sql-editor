<template>
  <div class="data-table-container">
    <v-text-field
      v-model="search"
      placeholder="Search"
      hide-details
      dense
      class="mx-4 mb-3"
      outlined
    ></v-text-field>
    <v-treeview
      v-if="schemaData.length"
      open-on-click
      open-all
      :items="schemaData"
      :search="search"
      item-key="name"
    >
      <template v-slot:prepend="{ item }">
        <div v-if="item.type == 'table'" class="d-flex">
          <img src="/icons/db-table.svg" alt="db-table" width="16px" class="d-block">
        </div>
        <div class="no-icon" v-else>-</div>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import schemaData from '@/data/tablesSchema.json'
export default {
  data() {
    return {
      schemaData: schemaData,
      search: ''
    }
  },
  computed: {
    search () {
      return (item, search, textKey) => item[textKey].indexOf(search) > -1
    },
  },

}
</script>

<style lang="scss">
.data-table-container {
  max-height: calc(46vh - 60px);
  overflow: scroll;
}
.v-treeview {
  .v-treeview-node__prepend{
    margin-right: 0;
    &:has(.no-icon){
      min-width: 10px;
    }
  }
  &-node {
    &__root {
      min-height:32px;
    }
    &__level {
      // width: 12px;
    }
    &__children {
      .v-treeview-node__prepend {
        // display: none;
      }
      .v-treeview-node__label {
        font-size: 14px;
      }
    }
  }
}
</style>
