import { NextResponse } from "next/server";
import { getTechSkills } from "../../controllers/techSkills/techSkillsController";

export async function GET () {

    const techSkills=await getTechSkills()

    return NextResponse.json(techSkills)

}
