// import { TOO_MANY_REQUESTS } from "http-status-codes"
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CREATE_BOOKING_BEGIN,
    CREATE_BOOKING_SUCCESS,
    CREATE_BOOKING_ERROR,
    GET_BOOKINGS_BEGIN,
    GET_BOOKINGS_SUCCESS,
    SET_ACCEPT_BOOKING,
    ACCEPT_BOOKING_BEGIN,
    ACCEPT_BOOKING_ERROR,
    ACCEPT_BOOKING_SUCCESS,
    SET_CANCEL_BOOKING,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE,
    STAFF_REGISTER_USER_BEGIN,
    STAFF_REGISTER_USER_ERROR,
    STAFF_REGISTER_USER_SUCCESS,
    UPLOAD_PHOTOS_BEGIN,
    UPLOAD_PHOTOS_SUCCESS,
    GET_PHOTOS_BEGIN,
    GET_PHOTOS_SUCCESS,
    DELETE_UPLOAD_SUCCESS,
    SUBMIT_PHOTOS_BEGIN,
    SUBMIT_PHOTOS_SUCCESS,
    GET_WEDDING_PHOTOS_BEGIN,
    GET_WEDDING_PHOTOS_SUCCESS,
    GET_CORPORATE_PHOTOS_SUCCESS,
    GET_CORPORATE_PHOTOS_BEGIN,
    GET_GENDER_PHOTOS_BEGIN,
    GET_GENDER_PHOTOS_SUCCESS,
    GET_BAPTISMAL_PHOTOS_BEGIN,
    GET_BAPTISMAL_PHOTOS_SUCCESS,
    GET_BIRTHDAY_PHOTOS_BEGIN,
    GET_BIRTHDAY_PHOTOS_SUCCESS,
    GET_DEBUT_PHOTOS_BEGIN,
    GET_DEBUT_PHOTOS_SUCCESS,
    GET_KIDDIE_PHOTOS_BEGIN,
    GET_KIDDIE_PHOTOS_SUCCESS,
} from "./actions"

import { initialState } from "./appContext"


const reducer = (state, action) => {
    //condition to determine if will display the alert or clear
    //set the states based on the alert 
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: "danger",
            alertText: "Please provide all values!"
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: "",
            alertText: ""
        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            name: action.payload.user.name,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: "success",
            alertText: "User Created! Redirecting....."
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            name: action.payload.user.name,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: "success",
            alertText: "Login Successful! Redirecting....."
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        }
    }

    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar: !state.showSidebar,
        }
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
            jobLocation: "",
            userLocation: ""
        }
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: "success",
            alertText: "User Profile Updated!!"
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        }
    }
    if (action.type === HANDLE_CHANGE) {

        return {
            ...state,
            page: 1,
            [action.payload.name]: action.payload.value,

        };
    }

    if (action.type === CREATE_BOOKING_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === CREATE_BOOKING_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "New Booking Sent"
        }
    }
    if (action.type === CREATE_BOOKING_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg
        }
    }

    if (action.type === GET_BOOKINGS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_BOOKINGS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            bookings: action.payload.bookings,
            totalBookings: action.payload.totalBookings,
            numOfPages: action.payload.numOfPages
        }
    }

    if (action.type === SET_ACCEPT_BOOKING) {
        const booking = state.bookings.find((booking) => booking._id === action.payload.id)
        const { _id, fName,email, lName, MI, eventType, venue, date, time, motif, theme, contactNumber, status, gender, celebName, age, groomName, brideName, companyName } = booking
        return {
            ...state,
            editBookingId: _id,
            fName,
            lName,
            MI,
            eventType,
            venue,
            date,
            time,
            motif,
            theme,
            contactNumber,
            status,
            email,
            //optional setting start here
            gender,
            celebName,
            age,
            groomName,
            brideName,
            companyName
        }
    }


    if (action.type === ACCEPT_BOOKING_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === ACCEPT_BOOKING_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Booking Accepted',
            status: 'accepted'
        }
    }

    if (action.type === ACCEPT_BOOKING_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }

    if (action.type === SET_CANCEL_BOOKING) {
        return {
            ...state,
            status: 'cancelled'
        }
    }

    if (action.type === SHOW_STATS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === SHOW_STATS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            stats: action.payload.stats,
            monthlyBookings: action.payload.monthlyBookings
        }
    }

    if (action.type === CLEAR_FILTERS) {
        return {
            ...state,
            search: "",
            searchStatus: "all",
            searchType: 'all',
            sort: 'latest'
        }
    }

    if (action.type === CHANGE_PAGE) {
        return {
            ...state,
            page: action.payload.page
        }
    }

    if (action.type === STAFF_REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true }

    }

    if (action.type === STAFF_REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "Admin Created"
        }
    }
    if (action.type === STAFF_REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        }
    }

    if (action.type === UPLOAD_PHOTOS_BEGIN) {
        return { ...state, isLoading: true }

    }

    if (action.type === UPLOAD_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "Photo uploaded..."
        }
    }

    if (action.type === GET_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            photos: action.payload.data
        }
    }
    if (action.type === DELETE_UPLOAD_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "success delete photo"
        }
    }

    if (action.type === SUBMIT_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }


    if (action.type === SUBMIT_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
        }
    }

    if (action.type === GET_WEDDING_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_WEDDING_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            weddingPhotos: action.payload.data
        }
    }
    if (action.type === GET_BIRTHDAY_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_BIRTHDAY_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            birthdayPhotos: action.payload.data
        }
    }
    if (action.type === GET_CORPORATE_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_CORPORATE_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            corporatePhotos: action.payload.data
        }
    }
    if (action.type === GET_DEBUT_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_DEBUT_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            debutPhotos: action.payload.data
        }
    }
    if (action.type === GET_KIDDIE_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_KIDDIE_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            kiddiePhotos: action.payload.data
        }
    }
    if (action.type === GET_BAPTISMAL_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_BAPTISMAL_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            baptismalPhotos: action.payload.data
        }
    }
    if (action.type === GET_GENDER_PHOTOS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false
        }
    }

    if (action.type === GET_GENDER_PHOTOS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            genderRevealPhotos: action.payload.data
        }
    }
    throw new Error(`no such action: ${action.type}`)
}

export default reducer