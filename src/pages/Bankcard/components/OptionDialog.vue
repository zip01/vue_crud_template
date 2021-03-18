<template>
    <el-dialog
            :title="isEdit ? '编辑': '新增'"
            width="45%"
            :visible.sync="visible"
            :before-close="close">
        <el-form ref="ent" :model="ent" :rules="formRules" label-width="110px"
                 label-position="right" :close-on-press-escape="false" :close-on-click-modal="false">
            <el-col :span="12">
                <el-form-item label="彩店" prop="shopId">
                  <el-input ></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="卡号" prop="bankcardNo">
                    <el-input v-model="ent.bankcardNo"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="状态" prop="status">
                    <el-switch
                            v-model="ent.status"
                            :active-value="1"
                            :inactive-value="0"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="是否默认配置" prop="defaultStatus">
                    <el-switch
                            v-model="ent.defaultStatus"
                            :active-value="1"
                            :inactive-value="0"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="银行" prop="bankName">
                  <el-input ></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="银行编码" prop="bankCode">
                    <el-input v-model="ent.bankCode" readonly></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="省份" prop="bankcardProvinceId">
                    <el-input ></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="城市" prop="bankcardCityId">
                    <el-select v-model="ent.bankcardCityId" @change="selectCity" clearable placeholder="请选择城市">
                        <el-option
                                v-for="item in cityList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="城市编码" prop="bankcardCityCode">
                    <el-input v-model="ent.bankcardCityCode" readonly></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="地址" prop="bankcardAddress">
                    <el-input v-model="ent.bankcardAddress"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="用户名" prop="bankcardUsername">
                    <el-input v-model="ent.bankcardUsername"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="备注" prop="comment">
                    <el-input v-model="ent.comment"></el-input>
                </el-form-item>
            </el-col>

        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
    import {
        Add,
        Update
    } from '@/api/bankcard'

    export default {
        props: {
            ent: Object,
            formRules: Object,
            loadData: Function
        },
        data () {
            return {
                isEdit: false,
                visible: false,
                cityList: [],
            }
        },
        methods: {
            submit () {
                this.$refs.ent.validate((validate) => {
                    if (validate) {
                        this.isEdit ? this.updateRow() : this.addRow()
                    }
                })
            },
            addRow () {
                let req = {...this.ent}
                Add(req).then(res => {
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    this.loadData()
                    this.close()
                })
            },
            updateRow () {
                let req = {...this.ent}
                Update(req).then(res => {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    })
                    this.loadData()
                    this.close()
                })
            },

            selectCity(value){
                let code = this.cityList.filter(x => x.value === value)[0]['code']
                this.ent.bankcardCityCode = code
            },
            close () {
                this.visible = false
                this.$nextTick(() => {
                    this.$refs.ent.resetFields()
                })
            },
            open (isEdit = false) {
                this.isEdit = isEdit
                this.visible = true
                this.$nextTick(() => {
                    if(this.isEdit){

                    }
                })
            },
        }
    }
</script>
