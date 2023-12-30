import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//?slices import
import { skillSlice } from '../slices/skills/skillsSlice';
//?apis import
import { skillsApi } from '../services/skilsApi/skillsApi';
import { projectsApi } from '../services/projectsApi/projectsApi';
import { projectSlice } from '../slices/projects/projectsSlice';

export const store=configureStore({
    reducer:{

        skills:skillSlice.reducer,
        projects:projectSlice.reducer,
        [skillsApi.reducerPath]:skillsApi.reducer,
        [projectsApi.reducerPath]:projectsApi.reducer

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
        skillsApi.middleware,
        projectsApi.middleware
    )
})

setupListeners(store.dispatch)