import { collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase/firebaseConfig";


export const getTechSkills=async ()=>{

    try {

        const techSkills:Array<Object>=[]

        const data=await getDocs(collection(db, "Tech skills"))

        data.forEach((skill)=>{
            techSkills.push({
                id:skill.id,
                ...skill.data()
            })
        })

        return techSkills

    } catch (error) {
        
        return {message:"An error occurred when loading the skills from firebase"}

    }
}