export type Cell = "_" | "X" | "0"

export function isCell(sym: string): sym is Cell {
    // TODO
    // Проверяет, является ли sym типа Cell
    // Возвращает true если sym типа Cell, иначе false
    return true
}

// Класс служит для определения типа объекта board из предыдущей работы с дополнительными методами.
export class Board {
    cells: Cell[]

    constructor(str: string | Cell[] = "_________") {
        // TODO
        // Используя сужения типа заполните this.cells
        this.cells = []
    }

    clone(): Board {
        // TODO
        // Функция должна вернуть копию объекта
        return this
    }

    private static fromString(str: string): Cell[] | null {
        // TODO
        // Переписывает из str символы в this.cells
        // Если длина строки не равна 9, возвращает null
        // Если встретиться символ не из Cell возвращает null
        // Если преобразование прошло успешно возвращает true
        return null        
    }

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        return true
    }

    move(index: number, cell: Cell): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        return true
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
        return "_"
    }


    status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, строку "Идет игра".
        return "Идет игра"
    }
}