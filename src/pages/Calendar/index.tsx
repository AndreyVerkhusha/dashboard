import FullCalendar from "@fullcalendar/react";
import {
    DateSelectArg,
    EventClickArg,
    EventApi
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "@/store/Calendar";
import { data } from "@/data";
import { motion } from "framer-motion";
import "./index.scss";

const Calendar = () => {
    const {currentEvents, setCurrentEvents} = useCalendar();

    const handleEvents = (events: EventApi[]) => {
        setCurrentEvents(events);
    };
    const handleDateSelect = (selectInfo: DateSelectArg) => {
        const title = prompt("Please enter a title for the event");
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: data.createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            });
        }
    };
    const handleEventClick = (clickInfo: EventClickArg) => {
        if (confirm("Are you sure you want to delete this event?"))
            clickInfo.event.remove();
    };
    return (
        <motion.div
            className="calendar-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >

            <div>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
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
        </motion.div>
    );
};

export default Calendar;