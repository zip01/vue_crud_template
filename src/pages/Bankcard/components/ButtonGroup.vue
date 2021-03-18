<template>
    <el-row class="search-button-group">
        <el-button size="mini" type="primary" @click="showAdd">
            新增
        </el-button>
    </el-row>
</template>
<script>
    export default {
        props: {
            showAdd: Function
        }
    }
</script>
