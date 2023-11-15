<template>
  <div class="table-parent">
    <div class="d-flex align-center justify-space-between mb-2">
      <div class="font-weight--500">
        Results
      </div>
      <div class="d-flex align-center text--14">
        <div class="grey--text">{{data.length}} Rows -</div>
        <div class="grey--text mx-2"> Scanned {{dataScanned}}mb in {{timeTaken}} secs -</div>
        <div class="pointer">
          <download-csv :data="data" name="data.csv" :fields="csvHeaders()">
            <div class="d-flex align-center">
              <img src="/icons/export.svg" width="16px" height="16px" alt="export-icon" class="mr-1"> Export
            </div>
          </download-csv>
        </div>
      </div>
    </div>
    <ag-grid-vue
      :style="getTableDimension()"
      class="ag-theme-alpine border-radius--8"
      :columnDefs="getHeaders()"
      :rowData="data"
      :defaultColDef="{ resizable: true }"
    >
    </ag-grid-vue>
  </div>
</template>

<script type="module">
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { AgGridVue } from "ag-grid-vue"

export default {
  props: {
    data: {
      type: Array,
      default:() => []
    }
  },
  components: { AgGridVue },
  data() {
    return {
      columnDefs: null,
      timeTaken: 0,
      dataScanned: 0
    };
  },
  methods: {
    getHeaders() {
      let headerValues =  Object.keys(this.data[0] || {})
      return headerValues.map(item => {
        return { headerName: item, field: item , cellRenderer: (params) => params.value, sortable: true, }
      })
    },
    csvHeaders() {
      return Object.keys(this.data[0])
    },
    setRandomNumbers(){
      this.timeTaken = (Math.random() * 10).toFixed(2)
      this.dataScanned = Math.floor(Math.random() * 100)
    },
    getTableDimension(){
      let width = document.querySelector('.table-parent')?.clientWidth
      let height = document.querySelector('.table-parent')?.clientHeight - 20
      return `width: ${width}px; height: ${height}px`
    }
  },
  async mounted() {
    this.setRandomNumbers()
  },
}
</script>

<style lang="scss">
.table-parent {
  width:100%;
  height: 50vh
}
.ag-root-wrapper.ag-layout-normal {
  border-radius: 8px !important;
}
</style>
