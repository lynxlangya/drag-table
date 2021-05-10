<template>
  <el-table row-key="id" :data="tableData" stripe border style="width: 100%">
    <el-table-column
      v-for="(item, index) in colList"
      :key="index"
      :prop="dropCol[index].prop"
      :label="item.label"
      :width="item.width || width"
      :class-name="item.cName"
    >
      <template v-if="item.slot">
        <slot :name="item.slot"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'EDTable',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    colList: {
      type: Array,
      default: () => [],
    },
    dropCol: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: null,
    },
  },
};
</script>
