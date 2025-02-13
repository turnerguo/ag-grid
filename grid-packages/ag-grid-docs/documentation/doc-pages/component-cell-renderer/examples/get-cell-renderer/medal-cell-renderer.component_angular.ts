import { Component } from "@angular/core";

import { ICellRendererAngularComp } from "@ag-grid-community/angular";
import { ICellRendererParams } from "@ag-grid-community/core"

@Component({
    selector: 'medal-component',
    template: `<span>{{this.displayValue}}</span>`
})
export class MedalCellRenderer implements ICellRendererAngularComp {
    private params!: ICellRendererParams<IOlympicData, number>;
    public displayValue!: string;

    agInit(params: ICellRendererParams<IOlympicData, number>): void {
        this.params = params;
        this.displayValue = new Array(params.value!).fill('#').join('');
    }

    medalUserFunction() {
        console.log(`user function called for medal column: row = ${this.params.node.rowIndex}, column = ${this.params.column!.getId()}`);
    }
    refresh(params: ICellRendererParams) {
        return false;
    }
}
