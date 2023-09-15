import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { ItemType } from "./types";



export async function getProducts(): Promise<ItemType[]> {
    const itemsColection = collection(db, "items")
    const filter = query(itemsColection, orderBy("cartNumber"))
    const queryDocs = await getDocs(filter)
    const data = queryDocs.docs.map(doc => {
        const d = doc.data()
        return {
            id: doc.id,
            image: d.image,
            school: d.school,
            likes: d.likes,
            cartNumber: d.cartNumber
        }
    })

    return data
}