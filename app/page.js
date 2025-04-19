import PlusButton from "@/components/PlusButton";
import Post from "@/components/Post";
import { Pool } from "@neondatabase/serverless";
export default async function Home() {

  const db = new Pool({connectionString: process.env.DATABASE_URL})

  const posts = await db.query(`
    SELECT
    posts.*,
    users.name as user_name
    FROM posts
    JOIN users on posts.userid = users.id
      `)
  
      
  return (
    <div>
      <div className="mt-20">
        {posts.rows.map((post)=><Post key={post.id} post={post}></Post>)}
      </div>
      <PlusButton></PlusButton>
    </div>
  );
}
