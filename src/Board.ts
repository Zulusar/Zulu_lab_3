export type Cell = "_" | "X" | "0"

export function isCell(sym: string): sym is Cell {
    // TODO
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
    return (sym === "Cell") ? true : false

}

let data:Cell

// Класс служит для определения типа объекта board из предыдущей работы с дополнительными методами.
export class Board {
    cells: Cell[]

    constructor(str: string | Cell[] = "_________") {
        // TODO
        // Используя сужения типа заполните this.cells       
        this.cells = []
        if(str === "string"){
            for(let i = 0; i<str.length; i++){
                this.cells[i] = str.split("")[i] as Cell
            }
        }
        else{
            for(let i = 0; i<str.length; i++){
                this.cells[i] = str[i] as Cell
            }
        }
    }

    clone(): Board {
        // TODO
        // Функция должна вернуть копию объекта
        return new Board(this.cells)
        
    }

    private static fromString(str: string): Cell[] | null {
        // TODO
        // Переписывает из str символы в this.cells
        // Если длина строки не равна 9, возвращает null
        // Если встретиться символ не из Cell возвращает null
        // Если преобразование прошло успешно возвращает true
        let count = 0
        for(let i = 0; i<str.length; i++){
            if(str.length != 9 || str[i]!=="Cell") 
                count++
            else{
                count = 0
            }
        }
        if(count!=0){
            return null
        }
        else{
            for(let i =0; i<str.length; i++){
                Board.cells[i] = str.split("")[i] as Cell          //обращение к нестатическому полю??
            }
        }

        return null        
    }

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        let count = 0
        for(let i = 0; i<this.cells.length; i++){
            if(this.cells[i]!="_")
                count ++
        }
        return (count!=0)? true : false
    }

    move(index: number, cell: Cell): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        if(this.cells[index] != "_") return false
        else{
            this.cells[index] = cell
            return true
        }
    }

    private getLineChar(line: number[]): Cell[] {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]];
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    checkWin(): string {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        for(let i = 0; i < Board.winPos.length; i++){
            if(this.cells[Board.winPos[i][0]] == this.cells[Board.winPos[i][1]] && this.cells[Board.winPos[i][1]] == this.cells[Board.winPos[i][2]]){
                //count++
                data = this.cells[Board.winPos[i][0]]
                break
            }
            else  data      
        }
        return data
       
    }


    status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, строку "Идет игра".
        return "Идет игра"                               //нужна ли проверка состояния доски???
    }
}