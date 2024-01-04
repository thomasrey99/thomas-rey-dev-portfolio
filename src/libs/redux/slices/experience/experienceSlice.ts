import { createSlice } from "@reduxjs/toolkit";

let initialState={
    allExperience:[]
}

export const experienceSlice=createSlice({
    name:"experienceSlice",
    initialState,
    reducers:{
        setExperiences:(state, {payload})=>{
            if(payload){
                state.allExperience=payload
            }
        }
    }
})

export const {setExperiences}=experienceSlice.actions