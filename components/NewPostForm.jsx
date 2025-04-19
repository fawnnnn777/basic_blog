import { Montserrat } from "next/font/google"
const montserrat = Montserrat({subsets: ['latin'], weight:['500']})


export default function NewPostForm(){
    
    return (
        <form className="text-xl
        text-center flex flex-col m-2">
            <h1 className={`text-2xl ${montserrat.className}`}>Share your thoughts</h1>
            <input className="m-2 border border-white/30 rounded p-1" type="text" placeholder="title"></input>
            <textarea className="
            resize-none m-2 h-72
            border border-white/30 rounded p-1" placeholder="what is your thought?"></textarea>
            <input className="rounded-3xl border bg-blue-800 border-blue-800 w-24 mx-auto m-2 " type="submit" value="Post"></input>
        </form>
    )
}