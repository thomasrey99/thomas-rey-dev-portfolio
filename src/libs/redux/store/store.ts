import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//?slices import
import { skillSlice } from '../slices/skills/skillsSlice';
//?apis import
import { skillsApi } from '../services/skilsApi/skillsApi';

export const store=configureStore({
    reducer:{

        skills:skillSlice.reducer,
        [skillsApi.reducerPath]:skillsApi.reducer

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(
        skillsApi.middleware
    )
})

setupListeners(store.dispatch)