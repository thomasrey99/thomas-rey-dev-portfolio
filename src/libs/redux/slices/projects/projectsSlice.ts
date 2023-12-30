import { createSlice } from "@reduxjs/toolkit";

let initialState={
    allProjects:[]
}
export const projectSlice=createSlice({
    name:"projectSlice",
    initialState,
    reducers:{

        setProjects:(state, {payload})=>{
            if(payload){
                state.allProjects=payload
            }
        }
    }
})

export const { setProjects }=projectSlice.actions