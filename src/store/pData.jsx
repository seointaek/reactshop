import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const result = await axios.get('https://carrepe.github.io/datalist/productData.json.json').then((res) => res.data.list);
export let pData = createSlice({
    name : 'pData',
    initialState : result,
});