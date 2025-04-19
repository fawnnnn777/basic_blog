import { FaPersonFalling } from "react-icons/fa6";
import Menu from "./Menu";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { auth } from "@/auth";
export default async function NavBar(){

    const session = await auth()

    return(
        <div className="bg-black fixed items-center w-screen border-box top-0 flex border-b border-white/30 h-18 p-2 justify-between">
            <Menu></Menu>
            <Link href="/" className="flex">
            <h1 className="text-2xl">Basic Being Basic</h1>
            <FaPersonFalling size={26} className="m-1"/>
            </Link>
            {session? <h1 className="text-md">Hello, {session.user.name.split(" ")[0]}</h1> :<SignInButton></SignInButton>
            }
        </div>
    )
}