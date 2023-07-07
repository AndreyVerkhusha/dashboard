import FullCalendar from '@fullcalendar/react'
import {
    DateSelectArg,
    EventClickArg,
    EventApi
} from "@fullcalendar/core"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import useCalendar from '@/store/Calendar'
import { data} from '@/data'
import './index.scss'

const Calendar = () => {
    const {currentEvents, setCurrentEvents} = useCalendar()

    let handleEvents = (events: EventApi[]) => {
        setCurrentEvents(events)
    }
    let handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt('Please enter a title for the event')
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: data.createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }
    let handleEventClick = (clickInfo: EventClickArg) => {
        if (confirm('Are you sure you want to delete this event?'))
            clickInfo.event.remove()
    }
    return (
        <div className="calendar-container">
            <div>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay"
                    }}
                    allDaySlot={false}
                    initialView="dayGridMonth"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    nowIndicator={false}
                    initialEvents={currentEvents}
                    eventsSet={handleEvents}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                />
            </div>
        </div>
    )
}

export default Calendar