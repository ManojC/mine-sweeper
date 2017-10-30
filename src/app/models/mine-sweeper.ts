import { Cell } from "./cell";

export class MineSweeper {
    public constructor(mineCount: number, xDimention: number = 10, yDimention: number = 10) {
        this._mineCount = mineCount;
        this._xDimention = xDimention;
        this._yDimention = yDimention;
        this._cells = [];
    }

    private _isInitialised: boolean;
    public get isInitialised(): boolean {
        return this._isInitialised;
    }

    private _mineCount: number;
    public get mineCount(): number {
        return this._mineCount;
    }

    private _xDimention: number;
    public get xDimention(): number {
        return this._xDimention;
    }

    private _yDimention: number;
    public get yDimention(): number {
        return this._yDimention;
    }

    private _cells: Array<Array<Cell>>;
    public get cells(): Array<Array<Cell>> {
        return this._cells;
    }
    public set cells(v: Array<Array<Cell>>) {
        this._cells = v;
    }

    /**
     * initialise
     * initialises the mine sweeper by creating cells with provided configuration
     */
    public initialise(): void {
        for (let yIndex: number = 0; yIndex < this._yDimention; yIndex++) {
            this._cells[yIndex] = [];
            for (let xIndex: number = 0; xIndex < this._xDimention; xIndex++) {
                this._cells[yIndex].push(new Cell(xIndex, yIndex, false));
            }
        }
        this.setMines();
    }

    private setMines(): void {
        let mineCount: number = 0;
        while (mineCount !== this._mineCount) {
            let randomX = Math.floor(Math.random() * 100);
            while (randomX >= this._xDimention) {
                randomX = Math.floor(Math.random() * 100);
            }
            let randomY = Math.floor(Math.random() * 100);
            while (randomY >= this._yDimention) {
                randomY = Math.floor(Math.random() * 100);
            }
            if (this.cells[randomX][randomY] && !this.cells[randomX][randomY].isMine) {
                this.cells[randomX][randomY].isMine = true;
                // this.cells[randomX][randomY].label = "X";
                ++mineCount;
            }
        }
    }

    public static getCell(x: number, y: number, cells: Array<Cell>): Cell {
        return cells.find((cell: Cell) => {
            return cell.xId === x && cell.yId === y;
        });
    }
}