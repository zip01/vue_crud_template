<template>
    <div class="table-container">
        <el-table stripe border
                  :data="data"
                  v-loading="loading"
                  highlight-current-row>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="showEdit(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="userName"
                             label="用户名"
                             width="150">
            </el-table-column>
            <el-table-column prop="comment"
                             label="备注" show-overflow-tooltip
                             width="150">
            </el-table-column>
            <el-table-column prop="createTime"
                             label="创建时间" sortable
                             width="160">
            </el-table-column>
            <el-table-column prop="updateTime"
                             label="更新时间" sortable
                             width="160">
            </el-table-column>

        </el-table>
        <div class="page-container">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageInfo.page"
              :page-sizes="[10, 20, 30]"
              :page-size="pageInfo.limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pageInfo.total">
          </el-pagination>
        </div>
    </div>
</template>
<script>
    import {
        List,
        Delete,
    } from '@/api/bankcard'

    export default {
        props: {
            showEdit: Function,
            searchForm: Object
        },
        data () {
            return {
                loading: false,
                data: [{
                  userName:'Tom',
                  comment: 'xx',
                  createTime: '2020-10-10',
                  updateTime: '2020-10-10'
                }],
                pageInfo: {
                    page: 1,
                    limit: 10,
                    total: 0
                },
                shopMap :{},
                provinceMap :{},
                cityMap :{},
            }
        },
        created: function () {
        },
        mounted: function () {

        },
        methods: {

            renderShop(type) {
                return this.shopMap[type];
            },
            loadData (isSearch = false ) { isSearch && (this.pageInfo.page = 1)
                let req = {...this.searchForm, ...this.pageInfo}
                this.loading = true
                List(req).then(res => {
                    this.data = res.data.records
                    this.pageInfo.total = res.data.total
                    this.loading = false
                })
            },
            deleteRow (row) {
                this.$confirm('确定删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Delete({id: row.id}).then(res => {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.loadData()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
            },
            handleSizeChange (v) {
                this.pageInfo.limit = v
                this.loadData()
            },
            handleCurrentChange (v) {
                this.pageInfo.page = v
                this.loadData()
            }
        }
    }
</script>
