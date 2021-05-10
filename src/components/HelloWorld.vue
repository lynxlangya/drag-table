<template>
  <section>
    <EDTable :tableData="tableData" :dropCol="dropCol" :colList="colList">
      <template #setting>
        <el-button type="text" icon="el-icon-sort" size="small">拖拽</el-button>
      </template>
    </EDTable>
    <pre style="text-align: left;">
      {{ tableData }}
    </pre>
  </section>
</template>

<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝表格拖拽
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import EDTable from './EDTable';
import Sortable from 'sortablejs';
import { colList, dropCol, TableList } from './data.js'
export default {
  components: {
    EDTable,
  },
  data() {
    return {
      colList: colList,
      dropCol: dropCol,
      tableData: TableList,
    };
  },
  mounted() {
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    /** 行拖拽 */
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody');
      const _this = this;
      Sortable.create(tbody, {
        animation: 180,
        delay: 0,
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },

    /** 列拖拽 */
    columnDrop() {
      const tHeader = document.querySelector('.el-table__header-wrapper tr');
      this.sortable = Sortable.create(tHeader, {
        animation: 180,
        /** 延迟 */
        // delay: 1,
        filter: '.disabled',
        onChoose: (evt) => {
          const len = this.colList.length;
          if (evt.oldIndex === len) {
            console.log(`%c 不能拖拽`, 'color: #e74c3c; font-weight: bold');
          }
        },
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
};
</script>
