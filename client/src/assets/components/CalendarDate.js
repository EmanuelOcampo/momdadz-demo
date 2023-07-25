import React, { useEffect } from 'react'
import Wrapper from '../wrappers/CalendarDate'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useAppContext } from '../../context/appContext'
import * as bootstrap from "bootstrap"
import daygrid from '@fullcalendar/daygrid'
const CalendarDate = () => {
    const { bookings, getBookings } = useAppContext()


    const type = (eventType) => {
        if (eventType==="bDayParty") return "Birthday Party"
        if (eventType==="gReveal") return "Gender Reveal"
        if (eventType==="kiddieParty") return "Kiddiey Party"
        else return eventType
    }
    const eventDidMount = (info) => {
        const event = info.event;
        const time = event.start.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    
        const popover = new bootstrap.Popover(info.el, {
          title:"<strong>" + event.title + "</strong>",
          placement: 'top',
          trigger: 'hover',
          customClass: 'popoverStyle',
          content: "<strong>" + time + "<br>" + type(event.extendedProps.eventType) + "</strong>",
          html: true
        });
    
        return popover;
      };

    const acceptedBookings = bookings.filter(booking => booking.status === "accepted")


    useEffect(() => {
        getBookings()
        // eslint-disable-next-line
    }, [])

    
    return (
        <Wrapper>
            <div className='calendar'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    themeSystem='bootstrap5'
                    // eventLimit={true}
                    // views={
                    //     daygrid={
                    //         eventLimit: "3"
                    //     }
                    // }
                    dayMaxEvents={3}
                    events={acceptedBookings}
                    eventBackgroundColor="var(--main-200)"
                    eventDidMount={eventDidMount}
                    eventTimeFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                        meridiem: 'short',
                    }}
                    
                    height="auto"      
                    />
            </div>
        </Wrapper>
    )
}

export default CalendarDate