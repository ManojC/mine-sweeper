export class Cell {
    public constructor(xId: number, yId: number, isMine: boolean) {
        if (typeof xId !== "number") {
            console.error("Invalid id")
        }
        if (typeof yId !== "number") {
            console.error("Invalid id")
        }
        this._xId = xId;
        this._yId = yId;
        this._isMine = isMine;
        this._isHidden = true;
        this.label = "&#10068;";
    }

    private _xId : number;
    public get xId() : number {
        return this._xId;
    }
    
    private _yId : number;
    public get yId() : number {
        return this._yId;
    }
    
    private _isHidden : boolean;
    public get isHidden() : boolean {
        return this._isHidden;
    }
    public set isHidden(isHidden : boolean) {
        this._isHidden = isHidden;
    }
    
    private _isMine : boolean;
    public get isMine() : boolean {
        return this._isMine;
    }
    public set isMine(isMine: boolean) {
        this._isMine = isMine;
    }
    
    private _label : string;
    public get label() : string {
        return this._label;
    }
    public set label(v : string) {
        this._label = v;
    }
    
    private _suspicious : boolean;
    public get suspicious() : boolean {
        return this._suspicious;
    }
    public set suspicious(suspicious : boolean) {
        this._suspicious = suspicious;
    }
    
}