import { softSkills, stateSkills, techSkill } from "@/utils/types/types";
import { createSlice } from "@reduxjs/toolkit";

let initialState={
    techSkills:[],
    softSkills:[],
}

export const skillSlice=createSlice({
    name:"skillSlice",
    initialState,
    reducers:{
        setSoftSkills: (state:stateSkills, {payload})=>{

            if(payload){
                state.softSkills=payload
            }

        },
        setTechSkills:(state:stateSkills, {payload})=>{

            if(payload){
                state.techSkills=payload
            }

        },
    }
})

export const { setTechSkills, setSoftSkills }=skillSlice.actions