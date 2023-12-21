import { createSlice } from "@reduxjs/toolkit";

import cartData from './cartData';

export let cartList = createSlice({
    name : 'cartList',
    initialState : cartData,
    reducers: {
        plusCount(prev, action){
           let num = prev.findIndex((a) => a._id === action.payload);
           prev[num].count++;
        },
        minusCount(prev, action){
            let num = prev.findIndex((a) => a._id === action.payload);
            prev[num].count--;
        },
        delItem(prev, action){
            let num = prev.findIndex((a) => a._id === action.payload);
            prev.splice(num,1);
            console.log(num);
        },
        addItem(prev, action){
            let num = prev.findIndex((a) => a._id === action.payload._id);
            if(num === -1){
                prev.push(action.payload);
            }else {
                prev[num].count += action.payload.count;
            }
        },
    },
});

export let {plusCount, minusCount, delItem, addItem} = cartList.actions 

/*let a = cartList.actions.plusCount;
let b = cartList.actions.minusCount;*/