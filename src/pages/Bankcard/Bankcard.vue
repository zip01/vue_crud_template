<template>
  <div>
    <Search :search-form="searchForm"
            :search="doLoadData"/>
    <ButtonGroup :show-add="showAdd"/>
    <Table ref="table"
           :search-form="searchForm"
           :show-edit="showEdit"/>
    <OptionDialog ref="dialog"
                  :ent="ent"
                  :form-rules="formRules"
                  :load-data="doLoadData"
    />
  </div>
</template>

<script>
import Search from './components/Search'
import Table from './components/Table'
import ButtonGroup from './components/ButtonGroup'
import OptionDialog from './components/OptionDialog'
import {searchForm, Ent, formRules} from './components/object'

export default {
  name: 'bankcard',
  components: {Search, ButtonGroup, Table, OptionDialog},
  data() {
    return {
      ent: new Ent(),
      searchForm,
      formRules
    }
  },
  mounted: function () {
    // this.doLoadData();
  },
  methods: {
    doLoadData(isSearch) {
      this.$refs.table.loadData(isSearch)
    },
    search() {
      this.doLoadData(true)
    },
    showAdd() {
      this.ent = new Ent()
      this.$refs.dialog.open()
    },
    showEdit(row) {
      this.ent = {...row}
      this.$refs.dialog.open(true)
    },
    release() {
      this.$refs.table.release()
    }
  }
}
</script>
