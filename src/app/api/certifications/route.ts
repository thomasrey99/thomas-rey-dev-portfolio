import { NextResponse } from "next/server";
import { getCertifications } from "../controllers/certifications/certificationsController";

export async function GET () {

    const certificates=await getCertifications()

    return NextResponse.json(certificates)

}
