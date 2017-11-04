import { Component, OnInit } from '@angular/core';
import { MineSweeper } from "./models/mine-sweeper";
import { FormsModule } from '@angular/forms';
import { Cell } from './models/cell';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private message: string = "Welcome To Minesweeper Game!!";
    private rows: number = 10;
    private columns: number = 10;
    private tilesRemaining: number = 0;
    private mines: number = 10;
    private mineSweeper: MineSweeper = null;

    public ngOnInit(): void {
        if (sessionStorage.getItem("rows")) {
            this.rows = parseInt(sessionStorage.getItem("rows"));
        }
        if (sessionStorage.getItem("columns")) {
            this.columns = parseInt(sessionStorage.getItem("columns"));
        }
        if (sessionStorage.getItem("mines")) {
            this.mines = parseInt(sessionStorage.getItem("mines"));
        }

        if (this.rows && this.columns && this.mines) {
            this.mineSweeper = new MineSweeper(this.mines, this.rows, this.columns);
            this.mineSweeper.initialise();
            this.tilesRemaining = this.rows * this.columns - this.mines;
            this.message = `Remaining tiles - ${this.tilesRemaining}`;
        }
    }

    private createMineSweeper(): void {
        sessionStorage.setItem('rows', this.rows.toString());
        sessionStorage.setItem('columns', this.columns.toString());
        sessionStorage.setItem('mines', this.mines.toString());
        this.mineSweeper = new MineSweeper(this.mines, this.rows, this.columns);
        this.mineSweeper.initialise();
        this.tilesRemaining = this.rows * this.columns - this.mines;
        this.message = `Remaining tiles - ${this.tilesRemaining}`;
    }

    private updateGame(event: any, cell: Cell) {
        if (!cell.isHidden) {
            return;
        }
        if (!cell.suspicious) {
            cell.suspicious = true;
            cell.label = "&#10069;";
            return;
        }
        cell.isHidden = false;
        if (cell.isMine) {
            cell.label = "&#x2718;";
            this.message = "Mine Exploded!!!!!"
            this.mineSweeper.cells.forEach((cellRow: Array<Cell>) => {
                cellRow.forEach((cell: Cell) => {
                    if (cell.isMine) {
                        cell.isHidden = false;
                        cell.label = "&#x2718;";
                    }
                })
            });
        } else {
            let mineCount: number = 0;
            let colNumber: number = cell.xId;
            let rowNumber: number = cell.yId;
            if (this.mineSweeper.cells[rowNumber - 1]) {
                if (this.mineSweeper.cells[rowNumber - 1][colNumber - 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber - 1].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber - 1][colNumber]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber - 1][colNumber + 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber - 1][colNumber + 1].isMine ? ++mineCount : mineCount;
                }
            }

            if (this.mineSweeper.cells[rowNumber][colNumber - 1]) {
                mineCount = this.mineSweeper.cells[rowNumber][colNumber - 1].isMine ? ++mineCount : mineCount;
            }
            if (this.mineSweeper.cells[rowNumber][colNumber + 1]) {
                mineCount = this.mineSweeper.cells[rowNumber][colNumber + 1].isMine ? ++mineCount : mineCount;
            }

            if (this.mineSweeper.cells[rowNumber + 1]) {
                if (this.mineSweeper.cells[rowNumber + 1][colNumber - 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber - 1].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber + 1][colNumber]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber].isMine ? ++mineCount : mineCount;
                }
                if (this.mineSweeper.cells[rowNumber + 1][colNumber + 1]) {
                    mineCount = this.mineSweeper.cells[rowNumber + 1][colNumber + 1].isMine ? ++mineCount : mineCount;
                }
            }
            cell.label = this.getMineCount(mineCount);
            --this.tilesRemaining
            this.message = this.tilesRemaining ? `Remaining tiles - ${this.tilesRemaining}` : "Level Cleared!!";
        }
    }

    private getMineCount(count: number): string {
        let label: string = "";
        switch(count) {
            case 0:
                label = "&#10061;";
                break;
            case 1:
                label = "&#10112;";
                break;
            case 2:
                label = "&#10113;";
                break;
            case 3:
                label = "&#10114;";
                break;
            case 4:
                label = "&#10115;";
                break;
            case 5:
                label = "&#10116;";
                break;
            case 6:
                label = "&#10117;";
                break;
            case 7:
                label = "&#10118;";
                break;
            case 8:
                label = "&#10118;";
                break;
            default: 
                break;
        }
        return label;
    }
}