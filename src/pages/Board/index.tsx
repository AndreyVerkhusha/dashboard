import { useState } from 'react';
import { motion } from 'framer-motion';
import Board, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban';
import { Card, Column } from "@/types";
import Tilt from 'react-parallax-tilt';

import useBoard from "@/store/Board";
import AddCardModal from './AddCardModal';
import { RxCross2 } from 'react-icons/rx';
import { IoMdAdd } from 'react-icons/io';
import "./index.scss";

const BoardPage = () => {
    const {boardData, setBoard} = useBoard();
    const [modalOpened, setModalOpened] = useState(false);
    const [currentColumn, setCurrentColumn] = useState<Column | object>({});

    const handleColumnMove = (
        _: Column,
        source: { fromPosition: number },
        destination: { toPosition: number }
    ) => {
        const updatedBoard = moveColumn(boardData, source, destination);
        setBoard(updatedBoard);
    };
    const handleCardMove = (
        _: Card,
        source: { fromPosition: number, fromColumnId: number },
        destination: { toPosition: number, toColumnId: number }
    ) => {
        const updatedBoard = moveCard(boardData, source, destination);
        setBoard(updatedBoard);
    };
    const identifyColumn = (card: Card) => {
        const column = boardData.columns.filter((column) => column.cards.includes(card));
        return column[0];
    };
    const getGradient = (card: Card) => {
        const column = identifyColumn(card);
        const title = column.title;
        switch (title) {
            case "TODO":
                return {
                    background:
                        "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
                };
            case "Doing":
                return {
                    background:
                        "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
                };
            case "Completed":
                return {
                    background:
                        "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
                };
            case "Backlog":
                return {
                    background:
                        "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
                };
        }
    };
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
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <span></span>
            <Board
                onCardDragEnd={handleCardMove}
                onColumnDragEnd={handleColumnMove}
                renderColumnHeader={(props: Column) => {
                    return (
                        <div className='column-header'>
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
                renderCard={(props: Card) => (
                    <Tilt
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        key={props.id}
                    >
                        <div className='kanban-card' style={getGradient(props)}>
                            <div>
                            <span>
                                {props.title}
                            </span>
                                <button className='remove-button' type='button'
                                        onClick={() => {
                                            const updatedBoard =
                                                removeCard(boardData, identifyColumn(props), props);
                                            setBoard(updatedBoard);
                                        }}
                                >
                                    <RxCross2 color="white" size={15}/>
                                </button>
                            </div>
                            <span>{props.description}</span>
                        </div>
                    </Tilt>
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