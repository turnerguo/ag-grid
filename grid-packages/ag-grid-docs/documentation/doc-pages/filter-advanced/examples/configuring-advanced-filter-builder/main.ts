import {
  Grid,
  GridOptions,
  GridReadyEvent,
  AdvancedFilterModel,
  AdvancedFilterBuilderVisibleChangedEvent,
  IAdvancedFilterBuilderParams
} from '@ag-grid-community/core';

const advancedFilterModel: AdvancedFilterModel = {
  filterType: 'join',
  type: 'AND',
  conditions: [
    {
      filterType: 'join',
      type: 'OR',
      conditions: [
        {
          filterType: 'number',
          colId: 'age',
          type: 'greaterThan',
          filter: 23,
        },
        {
          filterType: 'text',
          colId: 'sport',
          type: 'endsWith',
          filter: 'ing',
        }
      ]
    },
    {
      filterType: 'text',
      colId: 'country',
      type: 'contains',
      filter: 'united',
    }
  ]
};

const advancedFilterBuilderParams: IAdvancedFilterBuilderParams = {
  showMoveButtons: true,
};

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: 'athlete' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'age', minWidth: 100 },
    { field: 'gold', minWidth: 100 },
    { field: 'silver', minWidth: 100 },
    { field: 'bronze', minWidth: 100 },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 180,
    filter: true,
    sortable: true,
    resizable: true,
  },
  enableAdvancedFilter: true,
  popupParent: document.getElementById('wrapper'),
  advancedFilterModel: advancedFilterModel,
  advancedFilterBuilderParams: advancedFilterBuilderParams,
  onAdvancedFilterBuilderVisibleChanged: onAdvancedFilterBuilderVisibleChanged,
  onGridReady: (params: GridReadyEvent) => {
    // Could also be provided via grid option `advancedFilterParent`.
    // Setting the parent removes the Advanced Filter input from the grid,
    // allowing the Advanced Filter to be edited only via the Builder, launched via the API.
    params.api.setAdvancedFilterParent(document.getElementById('advancedFilterParent'));
  },
  onFilterChanged: onFilterChanged,
}

function onAdvancedFilterBuilderVisibleChanged(event: AdvancedFilterBuilderVisibleChangedEvent<IOlympicData>) {
  const eButton = document.getElementById('advancedFilterBuilderButton')!;
  if (event.visible) {
    eButton.setAttribute('disabled', '');
  } else {
    eButton.removeAttribute('disabled');
  }
}

function onFilterChanged() {
  const advancedFilterApplied = !!gridOptions.api!.getAdvancedFilterModel();
  document.getElementById('advancedFilterIcon')!.classList.toggle('filter-icon-disabled', !advancedFilterApplied);
}

function showBuilder() {
  gridOptions.api!.showAdvancedFilterBuilder();
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then((data: IOlympicData[]) => gridOptions.api!.setRowData(data))
})
