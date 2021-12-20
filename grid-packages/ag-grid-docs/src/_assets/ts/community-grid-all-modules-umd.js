// for js examples that just require community functionality (landing pages, vanilla community examples etc)

const  ModuleRegistry = require("../../../../../community-modules/core/dist/cjs/es5/main");
export * from "../../../../../community-modules/core/dist/cjs/es5/main";

/* MODULES - Don't delete this line */
require("../../../../../community-modules/client-side-row-model/dist/cjs/es5/clientSideRowModelModule");
const ClientSideRowModelModule = require("../../../../../community-modules/client-side-row-model/dist/cjs/es5/clientSideRowModelModule").ClientSideRowModelModule;

require("../../../../../community-modules/csv-export/dist/cjs/es5/csvExportModule");
const CsvExportModule = require("../../../../../community-modules/csv-export/dist/cjs/es5/csvExportModule").CsvExportModule;

require("../../../../../community-modules/filter/dist/cjs/es5/filterModule");
const FilterModule = require("../../../../../community-modules/filter/dist/cjs/es5/filterModule").FilterModule;

require("../../../../../community-modules/infinite-row-model/dist/cjs/es5/infiniteRowModelModule");
const InfiniteRowModelModule = require("../../../../../community-modules/infinite-row-model/dist/cjs/es5/infiniteRowModelModule").InfiniteRowModelModule;

ModuleRegistry.ModuleRegistry.register(ClientSideRowModelModule);
ModuleRegistry.ModuleRegistry.register(CsvExportModule);
ModuleRegistry.ModuleRegistry.register(FilterModule);
ModuleRegistry.ModuleRegistry.register(InfiniteRowModelModule);