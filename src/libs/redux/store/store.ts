import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//?slices import
import { skillSlice } from '../slices/skills/skillsSlice';
import { experienceSlice } from '../slices/experience/experienceSlice';
import { projectSlice } from '../slices/projects/projectsSlice';
//?apis import
import { skillsApi } from '../services/skilsApi/skillsApi';
import { projectsApi } from '../services/projectsApi/projectsApi';
import { experienceApi } from '../services/experienceApi/experienceApi';



export const store=configureStore({
    reducer:{

        skills:skillSlice.reducer,
        projects:projectSlice.reducer,
        experiences:experienceSlice.reducer,
        [skillsApi.reducerPath]:skillsApi.reducer,
        [projectsApi.reducerPath]:projectsApi.reducer,
        [experienceApi.reducerPath]:experienceApi.reducer

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
        skillsApi.middleware,
        projectsApi.middleware,
        experienceApi.middleware
    )
})

setupListeners(store.dispatch)