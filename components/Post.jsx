import { Montserrat } from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ['500']})

export default function Post({post}){

    return(
        <div className={`bg-white/20 m-2 p-2 rounded-lg`}>
            <p>{post.user_name}</p>
            <h1 className="text-lg font-bold">{post.title}</h1>
            <p className={`${montserrat.className}`}>{post.text}</p>
        </div>
    )
}