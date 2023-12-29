import { softSkills, techSkill } from "@/utils/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const {base_url}=process.env

export const skillsApi=createApi({
    reducerPath:"certificationsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:base_url
    }),
    endpoints:(build)=>({
        getSoftSkills:build.query<softSkills[], null>({
            query:()=>"api/skills/softSkills"
        }),
        getTechSkills:build.query<techSkill[], null>({
            query:()=>"api/skills/techSkills"
        })
    })
})

export const {useGetSoftSkillsQuery, useGetTechSkillsQuery}=skillsApi