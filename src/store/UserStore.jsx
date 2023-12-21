import { createSlice } from "@reduxjs/toolkit";

export let user = createSlice({
    name : 'user',
    initialState : {id : '', name :'seo', age : 24},
    reducers: {
        changeName(prev){
            prev.name = 'VVV';
         },
        changeName(prev, action){
           prev.name = action.payload;
        },
    },
});
export let { changeName } = user.actions
