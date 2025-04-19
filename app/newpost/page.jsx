import NewPostForm from "@/components/NewPostForm";
import { SessionProvider } from "next-auth/react";


export default function Page(){
    return(
        <div className="mt-19">
            <SessionProvider>
            <NewPostForm></NewPostForm>

            </SessionProvider>
        </div>
    )
}