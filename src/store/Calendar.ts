import { create } from 'zustand';
import { INITIAL_EVENTS } from '@/data'

type State = {
    currentEvents: {id: string, title: string, start: string}[]
    setCurrentEvents: (events: any) => void;
}
const useCalendar = create<State>((set) => {
    return {
        currentEvents: INITIAL_EVENTS,
        setCurrentEvents: (events)=> set({currentEvents: events})
    }
})
export default useCalendar
