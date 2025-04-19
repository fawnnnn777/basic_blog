import { Pool } from "@neondatabase/serverless";
import { headers } from "next/headers";

export async function POST(req) {
    const db = new Pool({connectionString: process.env.DATABASE_URL})

    const {title, content, userId} = await req.json()

    if(!title || !content || !userId){
        return new Response(JSON.stringify({message: "no content or title"}),
    {status: 400,
        headers: {'Content-Type': 'application/json'}}
    )
    }

    try{
        const result = db.query(`INSERT INTO posts (title, text, userid) VALUES ($1, $2, $3)`,
            [title, content, userId]
        )
        return new Response(JSON.stringify({message: "post created"}),{
            status: 200,
            headers: {'Content-Type': 'application/json'}
        })
    }
    catch(error){
        console.log(error);
        return new Response(JSON.stringify({message: "it didn't work ):"}),{
            status: 500,
            headers: {'Content-Type': 'application/json'}
        })
    }

}