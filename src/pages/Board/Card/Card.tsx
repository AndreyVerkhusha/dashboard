import Tilt from "react-parallax-tilt";
import { removeCard } from "@asseinfo/react-kanban";
import { RxCross2 } from "react-icons/rx";
import { FC, memo } from "react";
import { Board, Card as CardType } from "@/types/types";

type Props = {
  getGradient: (card: CardType) => Record<string, string> | undefined;
  card: CardType;
  boardData: Board;
  identifyColumn: (card: CardType) => void;
  setBoard: (board: Board) => void;
};

const Card: FC<Props> = memo(
  ({ getGradient, boardData, setBoard, identifyColumn, card }) => {
    return (
      <Tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        key={card.id}
      >
        <div className="kanban-card" style={getGradient(card)}>
          <div>
            <span>{card.title}</span>
            <button
              className="remove-button"
              type="button"
              onClick={() => {
                const updatedBoard = removeCard(
                  boardData,
                  identifyColumn(card),
                  card
                );
                setBoard(updatedBoard);
              }}
            >
              <RxCross2 color="white" size={15} />
            </button>
          </div>
          <span>{card.description}</span>
        </div>
      </Tilt>
    );
  }
);

export default Card;
