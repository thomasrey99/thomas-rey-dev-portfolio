import { NextResponse } from "next/server";
import { getExperience } from "../controllers/experience/experienceController";



export async function GET () {

    const experiences=await getExperience()

    return NextResponse.json(experiences)
    
}
