import { experience } from "@/utils/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const {base_url}=process.env

export const experienceApi=createApi({
    reducerPath:"experienceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:base_url
    }),
    endpoints:(build)=>({
        getExperience:build.query<experience[], null>({
            query:()=>"api/experience"
        })
    })
})

export const {useGetExperienceQuery}=experienceApi