import { createSlice } from "@reduxjs/toolkit";

let data = JSON.parse(localStorage.getItem('watched'))
export let watched = createSlice({
    name : 'watched',
    initialState : data || [],
});