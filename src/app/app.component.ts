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
    private rows: number = 0;
    private columns: number = 0;
    private mines: number = 0;
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
            console.log(this.mineSweeper.cells);
        }
    }

    private createMineSweeper(): void {
        sessionStorage.setItem('rows', this.rows.toString());
        sessionStorage.setItem('columns', this.columns.toString());
        sessionStorage.setItem('mines', this.mines.toString());
        this.mineSweeper = new MineSweeper(this.mines, this.rows, this.columns);
        this.mineSweeper.initialise();
        console.log(this.mineSweeper.cells);
    }

    private updateGame(event: any, cell: Cell) {
        cell.isHidden = false;
        if (cell.isMine) {
            cell.label = "X"
            this.mineSweeper.cells.forEach((cellRow: Array<Cell>) => {
                cellRow.forEach((cell: Cell) => {
                    if (cell.isMine) {
                        cell.isHidden = false;
                        cell.label = "X";
                    }
                })
            })
        } else {
            cell.label = "O";
        }
    }
}