import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"
import Loading from "./Loading"
import Booking from "./Booking"
import Wrapper from "../wrappers/BookingContainer"
import PageBtnContainer from "./PageBtnContainer"

const BookingContainer = () => {
    const {
        getBookings,
        bookings,
        isLoading, 
        page, 
        totalBookings, 
        search, 
        searchStatus, 
        searchType, 
        sort,
        numOfPages
     } = useAppContext()

    useEffect(() => {
        const delayForTyping = setTimeout(() => {
            getBookings()
        }, 400);
        return () => clearTimeout(delayForTyping)
        // eslint-disable-next-line
    }, [page, search, searchStatus, searchType, sort])

    if (isLoading) {
        return <Loading center />
    }

    if (bookings.length === 0) {
        return (
            <Wrapper>
                <h2>No Bookings to display...</h2>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <h5>{totalBookings} Booking{bookings.length > 1 && 's'}</h5> 
            <div className={numOfPages === 1? "bookings bookings-padding" : "bookings"}>
                {bookings.map((booking) => {
                    return <Booking key={booking._id}{...booking} />
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer/>   }
        </Wrapper>
    )
}

export default BookingContainer