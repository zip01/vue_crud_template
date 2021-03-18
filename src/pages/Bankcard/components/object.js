export let searchForm = {
    name: null
}

export class Ent {
    id
    shopId
    bankcardNo
    bankcardId
    status
    defaultStatus
    bankName
    bankCode
    bankcardProvinceId
    bankcardCityId
    bankcardCityCode
    bankcardAddress
    bankcardUsername
    comment
    createTime
    updateTime
}

export let formRules = {
    id: [{required: true, message: '请填写主键', trigger: 'change'}],
    shopId: [{required: true, message: '请填写彩店的ID', trigger: 'change'}],
    bankcardNo: [{required: true, message: '请填写银行卡号', trigger: 'change'}],
    status: [{required: true, message: '请填写状态，1有效，0无效', trigger: 'change'}],
    defaultStatus: [{required: true, message: '请填写是否默认配置，1默认，0不默认', trigger: 'change'}],
    bankName: [{required: true, message: '请填写银行名称', trigger: 'change'}],
    bankCode: [{required: true, message: '请填写银行Code', trigger: 'change'}],
    bankcardProvinceId: [{required: true, message: '请填写银行卡省份ID', trigger: 'change'}],
    bankcardCityId: [{required: true, message: '请填写银行卡城市ID', trigger: 'change'}],
    bankcardCityCode: [{required: true, message: '请填写银行卡城市Code', trigger: 'change'}],
    bankcardAddress: [{required: true, message: '请填写银行卡地址', trigger: 'change'}],
    bankcardUsername: [{required: true, message: '请填写银行卡用户名', trigger: 'change'}],
    comment: [{required: true, message: '请填写备注', trigger: 'change'}],
    createTime: [{required: true, message: '请填写创建时间', trigger: 'change'}],
    updateTime: [{required: true, message: '请填写更新时间', trigger: 'change'}],
}
