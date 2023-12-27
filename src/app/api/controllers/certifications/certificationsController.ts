import { collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase/firebaseConfig";

export const getCertifications=async ()=>{

    try {

        const certificates:Array<Object>=[]
    
        const data=await getDocs(collection(db, "certificates"))

        data.forEach((certificate)=>{
            certificates.push({
                id:certificate.id,
                ...certificate.data()
            })
        })

        return certificates

    } catch (error) {
        
        return {message:"An error occurred when loading the certificates from firebase"}
        
    }
    
}