import { Montserrat } from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ['500']})

export default function Post(){

    return(
        <div className={`bg-white/20 m-2 p-2 rounded-lg`}>
            <p>User</p>
            <h1 className="text-lg font-bold">Tittle</h1>
            <p className={`${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quisquam ut quis, nostrum quibusdam repellendus error pariatur qui ullam facere neque provident minima perspiciatis. Ipsum impedit molestias id quisquam beatae?</p>
        </div>
    )
}