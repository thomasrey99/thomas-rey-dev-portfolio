import { NextResponse } from "next/server";
import { getSoftSkills } from "../controllers/softSkills/softSkilsController";


export async function GET () {

    const softSkills=await getSoftSkills()

    return NextResponse.json(softSkills)

}