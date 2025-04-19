import Link from "next/link";
import { FaPlus } from "react-icons/fa6";



export default function PlusButton(){
    return(
        <Link className="bg-blue-700 fixed bottom-3 right-3 p-3 rounded-3xl" href='/newpost'>
            <FaPlus size={24}/>
        </Link>
    )
}