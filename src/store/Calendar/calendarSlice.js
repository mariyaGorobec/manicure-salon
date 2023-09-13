import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { format } from "date-fns/esm";

const initialState = {
    appointments: [],
    masters: [],
    allAppointmentsInTheDay: [],
    time: []
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
            const getAllAppointmentsInTheDay = state.appointments.filter(item => format(new Date(item.time), "yyyy.MM.dd") === format(new Date(action.payload.value), "yyyy.MM.dd"));
            state.allAppointmentsInTheDay = getAllAppointmentsInTheDay;
            const masters = [...new Set(getAllAppointmentsInTheDay.map(item => item.master_name))];
            state.masters = masters;
        },
        getTime: (state, action) => {
            const time = state.allAppointmentsInTheDay.filter(item => item.master_name === action.payload.value).map(item => format(new Date(item.time), "h:MM"));
            state.time = time;
        },
        resetData: state => {
            state.masters = [];
            state.allAppointmentsInTheDay = [];
            state.time = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.appointments = action.payload
        })
    }
})

export default calendarSlice.reducer;
export const { getMasters, getTime, resetData} = calendarSlice.actions;
