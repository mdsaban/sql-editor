<template>
  <div class="saved-query-container border-1 border-radius--8">
    <div
      v-for="(query, index) in savedQueries"
      :key="query.id"
      class="pointer text--14 font-weight--500"
      @click="selectQuery(query)"
      @mouseover="currentIndex = index"
      @mouseleave="currentIndex = -1"
    >
      <v-divider v-if="index != 0"></v-divider>
      <div class="d-flex justify-space-between pa-4 align-center">
        <div class="d-flex align-center">
          <img src="/icons/saved-db.svg" width="16px" height="16px" class="mr-1" alt="saved-query"> {{query.name}}
        </div>
        <div v-if="currentIndex == index">
          <img src="/icons/trash.svg" width="14px" height="14px" @click.stop="deleteSavedQuery(query.id)" class="pointer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1,
    }
  },
  computed: {
    savedQueries() {
      return this.$store.state.savedQueries
    }
  },
  methods: {
    selectQuery(query) {
      this.$store.dispatch('openSavedQuery', query)
    },
    deleteSavedQuery(queryId){
      this.$store.dispatch('deleteSavedQuery', queryId)
    }
  }
}
</script>

<style lang="scss">
.saved-query-container {
  max-height: calc(100% - 60px);
  overflow: scroll;
}
</style>
