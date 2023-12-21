import { createSlice } from "@reduxjs/toolkit";

export let stock = createSlice({
    name : 'stock',
    initialState : [1, 2, 3, 4, 5],
});