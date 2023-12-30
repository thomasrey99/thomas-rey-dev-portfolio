import { project } from "@/utils/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const {base_url} =process.env

export const projectsApi=createApi({
    reducerPath:"projectsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:base_url
    }),
    endpoints:(build)=>({
        getProjects:build.query<project[], null>({
            query:()=>"api/projects"
        })
    })
})

export const { useGetProjectsQuery } =projectsApi