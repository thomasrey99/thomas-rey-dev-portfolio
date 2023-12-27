import { collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase/firebaseConfig";

export const getSoftSkills= async ()=>{

    try {
        
        const softSkills:Array<Object>=[]

        const data=await getDocs(collection(db, "Soft skills"))

        data.forEach((skill)=>{
            softSkills.push({
                id:skill.id,
                ...skill.data()
            })
        })

        return softSkills

    } catch (error) {
        
        return {message:"An error occurred when loading the softSkills from firebase"}
    }
}