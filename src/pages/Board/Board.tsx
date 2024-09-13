import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Board, { moveCard, moveColumn, addCard } from "@asseinfo/react-kanban";
import { Card as CardT, Column } from "@/types/types";
import Card from "./Card/Card";

import useBoard from "@/store/Board";
import AddCardModal from "./AddCardModal/AddCardModal";
import { IoMdAdd } from "react-icons/io";
import "./Board.scss";

const BoardPage = () => {
  const { boardData, setBoard } = useBoard();
  const [modalOpened, setModalOpened] = useState(false);
  const [currentColumn, setCurrentColumn] = useState<Column>();

  const handleColumnMove = (
    _: Column,
    source: { fromPosition: number },
    destination: { toPosition: number }
  ) => {
    const updatedBoard = moveColumn(boardData, source, destination);
    setBoard(updatedBoard);
  };

  const handleCardMove = (
    _: CardT,
    source: { fromPosition: number; fromColumnId: number },
    destination: { toPosition: number; toColumnId: number }
  ) => {
    const updatedBoard = moveCard(boardData, source, destination);
    setBoard(updatedBoard);
  };

  const identifyColumn = useCallback(
    (card: CardT) => {
      const column = boardData.columns.filter((column) =>
        column.cards.includes(card)
      );
      return column[0];
    },
    [boardData.columns]
  );

  const getGradient = useCallback(
    (card: CardT): Record<string, string> | undefined => {
      const column = identifyColumn(card);
      const title = column.title;

      switch (title) {
        case "TODO":
          return {
            background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)"
          };
        case "Doing":
          return {
            background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)"
          };
        case "Completed":
          return {
            background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)"
          };
        case "Backlog":
          return {
            background:
              "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)"
          };
      }
    },
    [identifyColumn]
  );

  const handleCardAdd = (title: string, detail: string) => {
    const card = {
      id: new Date().getTime(),
      title,
      description: detail
    };
    const updatedBoard = addCard(boardData, currentColumn, card);
    setBoard(updatedBoard);
    setModalOpened(false);
  };

  return (
    <motion.div
      className="board-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span></span>
      <Board
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderColumnHeader={(props: Column) => {
          return (
            <div className="column-header">
              <span>{props.title}</span>
              <IoMdAdd
                color="white"
                size={25}
                title="Add card"
                onClick={() => {
                  setModalOpened(true);
                  setCurrentColumn(props);
                }}
              />
            </div>
          );
        }}
        renderCard={(card: CardT) => (
          <Card
            boardData={boardData}
            getGradient={getGradient}
            card={card}
            identifyColumn={identifyColumn}
            setBoard={setBoard}
          />
        )}
      >
        {boardData}
      </Board>
      <AddCardModal
        visible={modalOpened}
        handleCardAdd={handleCardAdd}
        onClose={() => setModalOpened(false)}
      />
    </motion.div>
  );
};

export default BoardPage;
