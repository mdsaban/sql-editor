<template>
  <div>
    <v-row align="center">
      <v-col cols="11">
        <v-tabs v-model="activeTab" @change="changeTab" show-arrows>
          <v-tab
            v-for="(tab, index) in editorTabs"
            :key="index"
            :ripple="false"
          >
            {{ tab.name }} <span v-if="!tab.id">*</span>
            <img src="/icons/close.svg" @click="closeTab(index)" width="16px" height="16px" class="pointer ml-3"/>
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="1" class="text-center">
        <v-btn depressed color="#d7d8f8" fab @click="addNewTab" x-small class="primary--text px-1">
          <img src="/icons/plus.svg" width="16px" height="16px">
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    editorTabs() {
      return this.$store.state.editorTabs
    },
    activeTab:{
      get() {
        return this.$store.state.activeTabIndex
      },
      set(){}
    }
  },
  methods: {
    addNewTab() {
      this.$store.dispatch('addNewTab')
    },
    changeTab(tabIndex) {
      this.$store.dispatch('changeActiveTab', tabIndex)
    },
    closeTab(tabIndex) {
      this.$store.dispatch('closeTab', tabIndex)
    }
  }
}
</script>

<style lang="scss">
.v-tabs-bar {
  height: 40px;
}
.v-tabs-slider-wrapper {
  display: none;
}
.v-tab{
  text-transform: initial !important;
  letter-spacing: initial !important;
  min-width: initial !important;
  border: 1px solid #e1e1e1;
  border-bottom: 0px;
  border-radius: 8px 8px 0 0;
  margin-right: 4px;
  &.hide-hover{
    &:hover::before{
      opacity: 0 !important;
    }
  }
}

</style>
