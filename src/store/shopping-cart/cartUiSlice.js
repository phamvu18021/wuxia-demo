import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {cartIsVisible: false},

    reducers:{
      toggle(state){
        state.cartIsVisible =!state.cartIsVisible
      }
    }
})


export const cartUiActions= cartUiSlice.actions
export default cartUiSlice;