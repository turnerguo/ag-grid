import { NumberFilterModel } from "./numberFilter";
import { TextInputFloatingFilter } from "../../floating/provided/textInputFloatingFilter";
export declare class NumberFloatingFilter extends TextInputFloatingFilter {
    protected postConstruct(): void;
    protected getDefaultFilterOptions(): string[];
    protected conditionToString(condition: NumberFilterModel): string;
}
