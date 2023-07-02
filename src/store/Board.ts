import {create} from 'zustand'
import {data} from '@/data'
import { Board } from "@/types";

type State = {
    boardData: Board
    setBoard: (board: Board) => void
}
const useBoard = create<State>((set)=> ({
    boardData: data.boardData(),
    setBoard: (board: Board)=> set(()=> ({board}))
}))

export default useBoard