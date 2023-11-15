<template>
  <div class="editor-container">
    <client-only placeholder="Editor Loading...">
      <codemirror
        :value="selectedQuery.value"
        @input="onCmCodeChange"
        @inputRead="showHints"
      >
      </codemirror>
    </client-only>

    <div class="d-flex justify-end mr-4 pb-2">
      <v-btn depressed color="primary" class="mr-2" @click="runQuery()" :loading="loading">Run Query</v-btn>
      <v-btn depressed @click="saveQuery()">Save Query</v-btn>
    </div>

    <v-snackbar
      v-model="showToast"
      :timeout="1000"
      top
      right >
      Your query is saved!
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      showToast: false,
      code: '',
    }
  },
  computed: {
    selectedQuery() {
      return this.$store.getters['selectedQuery']
    }
  },
  methods: {
    showHints(cm, change) {
      if (change.text[0] != " ") cm.showHint({ completeSingle: false });
    },
    onCmCodeChange(newCode) {
      this.code = newCode
      this.$store.dispatch('updateQueryValue', newCode)
    },
    saveQuery(){
      this.showToast = true
      this.$store.dispatch('addNewQuery', { id: this.selectedQuery.id || new Date().getTime(), value: this.code || this.selectedQuery.value, name: 'New Query'  })
      this.$emit('saveQuery')
    },
    async runQuery() {
      this.loading = true
      this.$emit('runQuery', this.selectedQuery.id)
      setTimeout(() => this.loading = false, 500) // setTimeout to show loader, just for this demo
    }
  }
}
</script>

<style lang="scss">
.editor-container {
  border-left: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
}
.CodeMirror {
  height: calc(46vh - 92px) !important;
  font-size: 14px !important;
  &-gutters {
    border-right: none !important;
    background: transparent !important;
  }
}
</style>
