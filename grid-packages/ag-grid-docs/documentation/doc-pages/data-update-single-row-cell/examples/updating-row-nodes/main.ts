import { Grid, GridOptions, GetRowIdParams } from '@ag-grid-community/core'

const rowData = [
  { id: 'aa', make: 'Toyota', model: 'Celica', price: 35000 },
  { id: 'bb', make: 'Ford', model: 'Mondeo', price: 32000 },
  { id: 'cc', make: 'Porsche', model: 'Boxster', price: 72000 },
  { id: 'dd', make: 'BMW', model: '5 Series', price: 59000 },
  { id: 'ee', make: 'Dodge', model: 'Challanger', price: 35000 },
  { id: 'ff', make: 'Mazda', model: 'MX5', price: 28000 },
  { id: 'gg', make: 'Horse', model: 'Outside', price: 99000 },
]

const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'make' },
    { field: 'model' },
    { field: 'price', filter: 'agNumberColumnFilter' },
  ],
  defaultColDef: {
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
  },
  animateRows: true,
  getRowId: (params: GetRowIdParams) => {
    return params.data.id
  },
  rowData: rowData,
  enableCellChangeFlash: true,
}

function updateSort() {
  gridOptions.api!.refreshClientSideRowModel('sort')
}

function updateFilter() {
  gridOptions.api!.refreshClientSideRowModel('filter')
}

function setPriceOnToyota() {
  const rowNode = gridOptions.api!.getRowNode('aa')!
  const newPrice = Math.floor(Math.random() * 100000)
  rowNode.setDataValue('price', newPrice)
}

function generateNewFordData() {
  const newPrice = Math.floor(Math.random() * 100000);
  const newModel = 'T-' + Math.floor(Math.random() * 1000);
  return {
    id: 'bb',
    make: 'Ford',
    model: newModel,
    price: newPrice,
  };
}

function setDataOnFord() {
  const rowNode = gridOptions.api!.getRowNode('bb')!;
  const newData = generateNewFordData();
  rowNode.setData(newData);
}

function updateDataOnFord() {
  const rowNode = gridOptions.api!.getRowNode('bb')!;
  const newData = generateNewFordData();
  rowNode.updateData(newData);
}

// wait for the document to be loaded, otherwise
// AG Grid will not find the div in the document.
document.addEventListener('DOMContentLoaded', function () {
  const eGridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(eGridDiv, gridOptions)
})
