import React from "react";

import board from "../data/board-data";
import Grid from "./Grid";
import BoardStatus from "./BoardStatus";
import useKeyUpDown from "@utils/hooks/useKeyUpDown";

import "./board.scss";

const onkeyup = (ev) => {
    if (ev.key > 0 && ev.key < 10) {
        board.insertToSelectedCell(parseInt(ev.key));
    } else if (ev.key == "Delete" || ev.key == "Backspace") {
        board.eraseSelectedCell();
    }
};

const onkeydown = (ev) => {
    let { row, col } = board.selectedCell;

    switch (ev.key) {
        case "ArrowUp": {
            if (row > 0) row -= 1;
            break;
        }

        case "ArrowRight": {
            if (col < 8) col += 1;
            break;
        }

        case "ArrowDown": {
            if (row < 8) row += 1;
            break;
        }

        case "ArrowLeft": {
            if (col > 0) col -= 1;
            break;
        }

        default:
            return;
    }
    board.selectCell(row, col);
};

function Board() {
    useKeyUpDown(onkeyup, onkeydown);

    return (
        <div id="board">
            <BoardStatus />
            <Grid />
        </div>
    );
}

export default React.memo(Board);
