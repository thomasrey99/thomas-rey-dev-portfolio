import { collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase/firebaseConfig";

export const getProjects=async ()=>{

    try {
        
        const projects:Array<Object>=[]

        const data=await getDocs(collection(db, "Projects"))

        data.forEach((project) => {
            
            projects.push({
                id:project.id,
                ...project.data()
            })
        });

        return projects

    } catch (error) {
        
        return {message:"create path and handler for projects"}
        
    }
}