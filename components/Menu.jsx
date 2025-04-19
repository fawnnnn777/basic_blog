'use client'
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { signOut } from "next-auth/react"

export default function Menu(){

    const [menuToggle, setMenuToggle] = useState(false)

    return(
        <div>
            <div>
                <RxHamburgerMenu size={26} onClick={()=>setMenuToggle(!menuToggle)}></RxHamburgerMenu>
            </div>
            <div className={`bg-gray-900 fixed w-8/10 left-0 top-0 h-screen z-50 ${menuToggle ? 'translate-x-0'  : '-translate-x-full'}
            transform transition-transform duration-300 ease-in-out
            `}>
                <button onClick={()=>signOut()}>Sign Out</button>
            </div>
            {menuToggle && (
                    <div onClick={()=>setMenuToggle(false)} className="fixed w-screen h-screen bg-transparent z-40 ">
            </div>
                )}
        </div>
    )
}