import React, { useReducer, useContext } from "react"
import axios from 'axios'
import reducer from "./reducer"
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

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')
const name = localStorage.getItem('name')

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || "",
    jobLocation: userLocation || "",
    showSidebar: false,
    editBookingId: "",
    fName: "" || name,
    lName: "",
    MI: "",
    eventType: "bDayParty",
    venue: "",
    date: "",
    email: "",
    time: "",
    motif: "",
    theme: "",
    contactNumber: "",
    gender: "male", //for bday,debut and kiddie 
    celebName: "", //for bday,debut,kiddie and Baptismal 
    age: "", //for bday,debut and kiddie 
    groomName: "", //for wedding 
    brideName: "", //for wedding 
    companyName: "", //for Corporate
    status: "",
    bookings: [],
    photos: [],
    weddingPhotos:[],
    corporatePhotos:[],
    debutPhotos:[],
    birthdayPhotos:[],
    genderRevealPhotos:[],
    baptismalPhotos:[],
    kiddiePhotos:[],
    totalBookings: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyBookings: [],
    search: '',
    searchStatus: "all",
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a',],
    clientName:'',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    //axios global setup
    // axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`

    //axios custom instance
    const authFetch = axios.create({
        baseURL: '/api/v1',
    })

    //request to axios 
    authFetch.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${state.token}`
            return config
        },
        (error) => {
            console.log(error);
            return Promise.reject(error)
        }
    )


    //response to axios 
    authFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            console.log(error.response);
            if (error.response.status === 401) {
                logoutUser()
            }
            return Promise.reject(error)
        }
    )

    //declare the display alert function 
    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert();
    }

    //clear the display alert for 3seconds
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000);
    }

    //SAVE THE USER,TOKEN,LOCATION IN LOCAL STORAGE
    const addUserToLocalStorage = ({ user, token, location, name }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)
        localStorage.setItem('name', name)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
        localStorage.removeItem('name')
    }

    //REGISTER USER FUNCTION
    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/register',
                currentUser)
            const { user, token, location } = response.data
            const name = user.name
            dispatch({
                //passing an data to backend using payload
                type: REGISTER_USER_SUCCESS,
                payload: {
                    user,
                    token,
                    location,
                    name
                },
            })
            addUserToLocalStorage({ user, token, location, name })
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()
    }


    //LOGIN USER
    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN })
        try {
            const { data } = await axios.post('/api/v1/auth/login', currentUser)
            const { user, token, location } = data
            const name = user.name

            //passing an "data" to backend using payload
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    user,
                    token,
                    location,
                    name
                },
            })
            addUserToLocalStorage({ user, token, location, name })
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()

    }

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR })
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT_USER })
        removeUserFromLocalStorage()
    }

    const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN })
    
        try {
            //connect to backend using axios 
            //specific route to access back end
            const { data } = await authFetch.patch("/auth/updateUser", currentUser)
            const { user, location, token } = data
            const name = user.name

            //passing an data to backend using payload
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: {
                    user,
                    location,
                    token,
                    name
                }
            })
            addUserToLocalStorage({ user, location, token, name })
            // console.log(data);

        } catch (error) {
            if (error.response.status !== 401) {
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: {
                        msg: error.response.data.msg
                    }
                })
            }
            // console.log(error.response);
        }
        clearAlert()
    }

    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
    }


    const createBooking = async () => {
        dispatch({ type: CREATE_BOOKING_BEGIN })
        const { eventType } = state;
        // console.log(eventType);
        if (eventType === "bDayParty" || eventType === "kiddieParty" || eventType === "debut") {
            try {
                const { fName, lName, MI, email, eventType, venue, date, time, motif, theme, contactNumber, gender, celebName, age } = state
                await axios.post('/api/v1/booking', {
                    fName, lName, MI, eventType,email, venue, date, time, motif, theme, contactNumber, gender, celebName, age
                })
                dispatch({ type: CREATE_BOOKING_SUCCESS })
            } catch (error) {
                if (error.response.status === 401)
                    return
                dispatch({
                    type: CREATE_BOOKING_ERROR,
                    payload: { msg: error.response.data.msg }
                })

            }

            ////////////////////////////////////////////////////// corporate ///////////////////////////////
        } else if (eventType === "corporate") {
            try {
                const { fName, lName, MI, eventType, email,venue, date, time, motif, theme, contactNumber, companyName } = state
                await axios.post('/api/v1/booking', {
                    fName, lName, MI, eventType, venue, email,date, time, motif, theme, contactNumber, companyName
                })
                dispatch({ type: CREATE_BOOKING_SUCCESS })
            } catch (error) {
                if (error.response.status === 401)
                    return
                dispatch({
                    type: CREATE_BOOKING_ERROR,
                    payload: { msg: error.response.data.msg }
                })

            }

            ////////////////////////////////////////////////////// baptismal ///////////////////////////////
        } else if (eventType === "baptismal") {
            try {
                const { fName, lName, MI, eventType, email,venue, date, time, motif, theme, contactNumber, celebName, gender } = state
                await axios.post('/api/v1/booking', {
                    fName, lName, MI, eventType, venue, email,date, time, motif, theme, contactNumber, celebName, gender
                })
                dispatch({ type: CREATE_BOOKING_SUCCESS })
            } catch (error) {
                if (error.response.status === 401)
                    return
                dispatch({
                    type: CREATE_BOOKING_ERROR,
                    payload: { msg: error.response.data.msg }
                })

            }

            ////////////////////////////////////////////////////// wedding ///////////////////////////////
        } else if (eventType === "wedding") {
            try {
                const { fName, lName, MI, eventType, venue,email, date, time, motif, theme, contactNumber, groomName, brideName } = state
                await axios.post('/api/v1/booking', {
                    fName, lName, MI, eventType, venue, date, email,time, motif, theme, contactNumber, groomName, brideName
                })
                dispatch({ type: CREATE_BOOKING_SUCCESS })
            } catch (error) {
                if (error.response.status === 401) return
                dispatch({
                    type: CREATE_BOOKING_ERROR,
                    payload: { msg: error.response.data.msg }
                })
            }
        } else {
            try {
                const { fName, lName, MI, eventType, venue, email,date, time, motif, theme, contactNumber } = state
                await axios.post('/api/v1/booking', {
                    fName, lName, MI, eventType, venue, date, email,time, motif, theme, contactNumber
                })
                dispatch({ type: CREATE_BOOKING_SUCCESS })
            } catch (error) {
                if (error.response.status === 401) return
                dispatch({
                    type: CREATE_BOOKING_ERROR,
                    payload: { msg: error.response.data.msg }
                })
            }
        }
        clearAlert()
    }

    const getBookings = async () => {
        const { page, search, searchStatus, searchType, sort } = state
        let url = `booking/Allbookings?page=${page}&status=${searchStatus}&eventType=${searchType}&sort=${sort}`
        if (search) {
            url = url + `&search=${search}`
        }
        dispatch({ type: GET_BOOKINGS_BEGIN })
        try {
            const { data } = await authFetch(url)
            const { bookings, totalBookings, numOfPages } = data
            dispatch({
                type: GET_BOOKINGS_SUCCESS,
                payload: {
                    bookings,
                    totalBookings,
                    numOfPages
                }
            })
        } catch (error) {
            logoutUser()
        }
        clearAlert()
    }

    const setAcceptBooking = (id) => {
        dispatch({ type: SET_ACCEPT_BOOKING, payload: { id } })
        // console.log(`set accept booking: ${id}`);
    }

    const acceptBooking = async () => {
        //dispatch an function that will change the value of status into accepted
        // status = 'accepted'
        // dispatch({type: ACCEPTED_BOOKING, payload:{status}})
        dispatch({ type: ACCEPT_BOOKING_BEGIN })
        try {
            const {
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
                gender,
                celebName,
                email,
                age,
                groomName,
                brideName,
                companyName,
                Corporate,
                status
            } = state

            await authFetch.patch(`/booking/${state.editBookingId}`, {
                fName,
                lName,
                MI,
                eventType,
                venue,
                date,
                time,
                motif,
                email,
                theme,
                contactNumber,
                gender,
                celebName,
                age,
                groomName,
                brideName,
                companyName,
                Corporate,
                status
            })

            dispatch({ type: ACCEPT_BOOKING_SUCCESS })
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({ type: ACCEPT_BOOKING_ERROR, payload: { msg: error.response.data.msg } })
        }
        clearAlert()
    }

    const cancelBooking = async (id) => {
        try {
            const { status } = state
            await authFetch.patch(`/booking/cancel/${id}`, { status })
            dispatch({ type: SET_CANCEL_BOOKING })
        } catch (error) {
            if (error.response.status === 401) return
            dispatch({ type: ACCEPT_BOOKING_ERROR, payload: { msg: error.response.data.msg } })
        }

    }

    const showStats = async () => {
        dispatch({ type: SHOW_STATS_BEGIN })
        try {
            const { data } = await authFetch('/booking/stats')
            dispatch({
                type: SHOW_STATS_SUCCESS,
                payload: {
                    stats: data.defaultStats,
                    monthlyBookings: data.monthlyBookings
                }
            })
        } catch (error) {
            logoutUser()
        }
        clearAlert()
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS })
    }

    const changePage = (page) => {
        dispatch({ type: CHANGE_PAGE, payload: { page } })
    }

    const registerStaff = async (staffUser) => {
        dispatch({ type: STAFF_REGISTER_USER_BEGIN })
        try {
            await axios.post('/api/v1/auth/registerStaff',
                staffUser)
            dispatch({ type: STAFF_REGISTER_USER_SUCCESS })
        } catch (error) {
            dispatch({
                type: STAFF_REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
        clearAlert()
    }

    const uploadPhotos = async (formData) => {
        dispatch({ type: UPLOAD_PHOTOS_BEGIN })
        try {
            await axios.post('/api/v1/upload/save', formData)
                .then((res) => {
                    console.log(res.data);
                })
            dispatch({ type: UPLOAD_PHOTOS_SUCCESS })
        } catch (error) {
            console.log(error);
        }
    }

    const getPhotos = async () => {
        dispatch({ type: GET_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/photos')
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }

    const deletePhoto = async (id, photo) => {
        try {
            const data = {id , photo} 
            console.log(data);
            await axios.delete(`/api/v1/upload/${data.id}`, {data})
            dispatch({type: DELETE_UPLOAD_SUCCESS})
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }

    const submitPhotos = async (data) =>{
        dispatch({type:SUBMIT_PHOTOS_BEGIN})
        try {
            await axios.post('api/v1/upload/submit', data)
            const {eventType, photos,clientName} = data
            console.log(data);
            dispatch({type:SUBMIT_PHOTOS_SUCCESS, payload:{
                photos,
                eventType,
                clientName
            }
        })
        console.log("success");
        } catch (error) {
            console.log(error);
        }
    }
    
    const getWeddingPhotos = async () =>{
        dispatch({ type: GET_WEDDING_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/wedding')
            dispatch({
                type: GET_WEDDING_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    
    const getBirthdayPhotos = async () =>{
        dispatch({ type: GET_BIRTHDAY_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/birthday')
            dispatch({
                type: GET_BIRTHDAY_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    
    // 
    const getCorporatePhotos = async () =>{
        dispatch({ type: GET_CORPORATE_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/corporate')
            dispatch({
                type: GET_CORPORATE_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }

    const getGenderPhotos = async () =>{
        dispatch({ type: GET_GENDER_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/gender')
            dispatch({
                type: GET_GENDER_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    const getBaptismalPhotos = async () =>{
        dispatch({ type: GET_BAPTISMAL_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/baptismal')
            dispatch({
                type: GET_BAPTISMAL_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    const getDebutPhotos = async () =>{
        dispatch({ type: GET_DEBUT_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/debut')
            dispatch({
                type: GET_DEBUT_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    const getKiddiePhotos = async () =>{
        dispatch({ type: GET_KIDDIE_PHOTOS_BEGIN })
        try {
            const { data } = await axios.get('api/v1/upload/kiddie')
            dispatch({
                type: GET_KIDDIE_PHOTOS_SUCCESS,
                payload: { data }
            })
        } catch (error) {
            console.log(error);
        }
        clearAlert()
    }
    return (
        <AppContext.Provider value={{
            ...state,
            displayAlert,
            registerUser,
            loginUser,
            toggleSidebar,
            logoutUser,
            updateUser,
            handleChange,
            createBooking,
            getBookings,
            setAcceptBooking,
            cancelBooking,
            acceptBooking,
            showStats,
            clearFilters,
            changePage,
            registerStaff,
            uploadPhotos,
            getPhotos,
            deletePhoto,
            submitPhotos,
            getWeddingPhotos,
            getBirthdayPhotos,
            getCorporatePhotos,
            getBaptismalPhotos,
            getDebutPhotos,
            getGenderPhotos,
            getKiddiePhotos
        }}>{children}
        </AppContext.Provider>
    )
}



const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }