import { Shape } from "./shape";
export declare enum ArcType {
    Open = 0,
    Chord = 1,
    Round = 2
}
/**
 * Circular arc node that uses the experimental `Path2D` class to define
 * the arc path for further rendering and hit-testing.
 */
export declare class Arc extends Shape {
    static className: string;
    protected path: Path2D;
    /**
     * It's not always that the path has to be updated.
     * For example, if transform attributes (such as `translationX`)
     * are changed, we don't have to update the path. The `dirtyFlag`
     * is how we keep track if the path has to be updated or not.
     */
    private _dirtyPath;
    set dirtyPath(value: boolean);
    get dirtyPath(): boolean;
    private _x;
    set x(value: number);
    get x(): number;
    private _y;
    set y(value: number);
    get y(): number;
    private _radius;
    set radius(value: number);
    get radius(): number;
    private _startAngle;
    set startAngle(value: number);
    get startAngle(): number;
    private _endAngle;
    set endAngle(value: number);
    get endAngle(): number;
    private get fullPie();
    private _counterClockwise;
    set counterClockwise(value: boolean);
    get counterClockwise(): boolean;
    /**
     * The type of arc to render:
     * - {@link ArcType.Open} - end points of the arc segment are not connected (default)
     * - {@link ArcType.Chord} - end points of the arc segment are connected by a line segment
     * - {@link ArcType.Round} - each of the end points of the arc segment are connected
     *                           to the center of the arc
     * Arcs with {@link ArcType.Open} do not support hit testing, even if they have their
     * {@link Shape.fillStyle} set, because they are not closed paths. Hit testing support
     * would require using two paths - one for rendering, another for hit testing - and there
     * doesn't seem to be a compelling reason to do that, when one can just use {@link ArcType.Chord}
     * to create a closed path.
     */
    private _type;
    set type(value: ArcType);
    get type(): ArcType;
    updatePath(): void;
    isPointInPath(x: number, y: number): boolean;
    isPointInStroke(x: number, y: number): boolean;
    render(ctx: CanvasRenderingContext2D): void;
}
