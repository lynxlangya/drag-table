const TableList = [
  {
    id: 1,
    date: '2016-05-02',
    name: '第1条',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: '第2条',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: '第3条',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    id: 4,
    date: '2016-05-03',
    name: '第4条',
    address: '上海市普陀区金沙江路 1516 弄',
  },
];

const dropCol = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  { label: '操作', slot: 'setting', width: 120 },
];

const colList = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  { label: '操作', slot: 'setting', cName: 'disabled', width: 120 },
];

export { TableList, dropCol, colList };
