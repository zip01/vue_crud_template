<template>
    <el-form
            label-width="110px"
            label-position="right"
            :model="searchForm"
            ref="searchForm"
            size="mini"
    >
        <el-row>
            <el-col :span="6">
                <el-form-item label="彩店" prop="shopId">
                    <el-input/>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="状态" prop="status">
                  <el-input/>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-button size="mini" type="primary" @click="search">
                    查询
                </el-button>
                <el-button size="mini" @click="resetSearch">
                    重置
                </el-button>
            </el-col>
        </el-row>
    </el-form>

</template>
<script>
    import {
        List
    } from '../../../api/bankcard'
    export default {
        props: {
            searchForm: Object,
            search: Function
        },
        methods: {
            resetSearch () {
                this.$refs.searchForm.resetFields()
            },
        }
    }
</script>
