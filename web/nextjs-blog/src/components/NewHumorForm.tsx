'use client'

import { api } from "@/lib/api"
import Cookie from "js-cookie"
import { useRouter } from "next/navigation"
import React from "react"
import { FormEvent } from "react"
import Rating from "./Rating"

export function NewHumorForm(){
    const router = useRouter()

    async function hundleCreateHumor(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const token = Cookie.get('token')
        

        await api.post('/humor', {
            humor: rating,
            quando:formData.get('quando'),
           
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        )
        
        router.push('/inicio')
    }

    const [rating, setRating] = React.useState(0);

    return(
        <div>
            <form className="grid grid-rows-1 place-content-center gap-4 pt-5" onSubmit={hundleCreateHumor}>

                <label htmlFor="">Quando</label>
                <input className="rouded-md" name="quando" type="datetime-local" />
                <label htmlFor="">Humor:</label>
                <div id="estrelas">
                <Rating count={5} value={rating} edit={true} className="flex" onChange={(value) => {
                    setRating(value)
                }}></Rating>
                </div>
                <button type="submit" className="my-5 text-white-Light rounded-md bg-green-Dark" >Enviar</button>
            </form>
        </div>
    )
}