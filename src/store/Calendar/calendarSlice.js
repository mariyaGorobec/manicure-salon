import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { format } from "date-fns/esm";

const initialState = {
    appointments: [],
    masters: [],
    allAppointmentsInTheDay: [],
    time: [],
    selectedMaster: {},
    selectedDay: {},
    selectedTime: {},
    idOfSelectedAppointments: {},
    goToReservation: false,
    isOnclickToReservation: false
}


export const fetchContent = createAsyncThunk(
    'calendar/fetchContent',
    async () => {

        const res = await axios('http://localhost:3000/api/appointments');
        const data = await res.data;
        return data;
    }
)

const calendarSlice = createSlice({
    name: "calendar",
    initialState: initialState,
    reducers: {
        getMasters: (state, action) => {
            const day = format(new Date(action.payload.value), "dd.MM.yyyy");
            state.selectedDay = day;
            const getAllAppointmentsInTheDay = state.appointments.filter(item => format(new Date(item.time), "dd.MM.yyyy") === day);
            state.allAppointmentsInTheDay = getAllAppointmentsInTheDay;
            const masters = [...new Set(getAllAppointmentsInTheDay.map(item => item.master_name))];
            state.masters = masters;
        },
        getTime: (state, action) => {
            state.selectedTime = {};
            
            const time = state.allAppointmentsInTheDay.filter(item => item.master_name === action.payload.value).map(item=>{
                const container = {
                    id: item.id,
                    time: format(new Date(item.time), "HH:mm")
                }
                return container;
            })
            //const time = state.allAppointmentsInTheDay.filter(item => item.master_name === action.payload.value).map(item =>  new Map([[item.id, format(new Date(item.time), "HH:mm")]]));
            state.time = time;
            state.goToReservation = false;
        },
        resetData: state => {
            state.selectedMaster = {};
            state.time = [];
            state.allAppointmentsInTheDay = [];
            state.masters = [];
            state.goToReservation = false;
        },
        getSelectedMaster: (state, action) => {
            state.selectedMaster = action.payload.value;
        },
        getSelectedTime: (state,action)=>{
            state.selectedTime = action.payload.time;
            state.idOfSelectedAppointments = action.payload.id;
        },
        buttonResrvation: (state)=>{
            state.goToReservation = true;
        },
        onClickToReservation: (state)=>{
            state.isOnclickToReservation = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.appointments = action.payload
        })
    }
})

export default calendarSlice.reducer;
export const { getMasters, getTime, resetData, getSelectedMaster, getSelectedTime, buttonResrvation, onClickToReservation } = calendarSlice.actions;
