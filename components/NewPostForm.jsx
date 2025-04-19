'use client'
import { Montserrat } from "next/font/google"
import { useState } from "react"
import { useSession } from "next-auth/react"
const montserrat = Montserrat({subsets: ['latin'], weight:['500']})


export default function NewPostForm(){

    const {data: session, status} = useSession()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    if(status === 'loading') return <p>loading...</p>
    const userId = session.user.id        

    async function handleSubmit(e) {
       e.preventDefault()
       console.log(title, content);
        setLoading(true)
        try{
            const res = await fetch('/api/posts',{
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, content, userId})
            })
            const data = await res.json()
        }
        catch(error){
            console.log(error);   
        }
        finally{
            setLoading(false)
            setTitle('')
            setContent('')
        }
        window.location.href = '/'
    }
    
    return (
        <form onSubmit={handleSubmit} className="text-xl
        text-center flex flex-col m-2">
            <h1 className={`text-2xl ${montserrat.className}`}>Share your thoughts</h1>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} className="m-2 border border-white/30 rounded p-1" type="text" placeholder="title"></input>
            <textarea onChange={(e)=>setContent(e.target.value)} value={content} className="
            resize-none m-2 h-72
            border border-white/30 rounded p-1" placeholder="what is your thought?"></textarea>
            <input disabled={loading} className="rounded-3xl border bg-blue-800 border-blue-800 w-24 mx-auto m-2 " type="submit" value={loading? 'Posting' : 'Post'}></input>
        </form>
    )
}