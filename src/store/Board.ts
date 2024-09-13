import { create } from "zustand";
import { data } from "@/data";
import { Board } from "@/types/types";

type State = {
  boardData: Board;
  setBoard: (board: Board) => void;
};
const useBoard = create<State>((set) => ({
  boardData: data.boardData(),
  setBoard: (board: Board) => set(() => ({ boardData: board }))
}));

export default useBoard;
