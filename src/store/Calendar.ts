import { create } from "zustand";
import {  INITIAL_EVENTS } from "@/data";
import { EventApi, EventInput } from "@fullcalendar/core";

type State = {
    currentEvents: EventInput[]
    setCurrentEvents: (event: EventApi[]) => void;
}
const useCalendar = create<State>((set) => ({
        currentEvents: INITIAL_EVENTS,
        setCurrentEvents: (events: any) => set({currentEvents: events})
    })
);
export default useCalendar;
