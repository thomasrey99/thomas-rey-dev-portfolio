import { getDocs, collection } from "firebase/firestore";
import { db } from "@/libs/firebase/firebaseConfig";

export const getExperience=async ()=>{

    try {

        const experiences:Array<Object>=[]

        const data=await getDocs(collection(db, "Experience"))

        data.forEach((experience)=>{
            experiences.push({
                id:experience.id,
                ...experience.data()
            })
        })

    return experiences

    } catch (error) {
        
        return {message:"create path and handler for experience"}
        
    }

}