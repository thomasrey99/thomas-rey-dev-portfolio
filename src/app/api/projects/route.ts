import { NextResponse } from "next/server";
import { getProjects } from "../controllers/projects/projectsController";

export async function GET (){
    
    const projects=await getProjects()

    return NextResponse.json(projects)
    
}