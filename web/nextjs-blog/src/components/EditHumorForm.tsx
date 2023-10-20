'use client'

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Cookie from "js-cookie"
import { FormEvent } from "react";
import { api } from "@/lib/api";
import Rating from "./Rating";
import React from "react";

export  function  EditHumorForm(){
    const router = useRouter();
    const params = useParams()
    const token = Cookie.get('token')

    async function hundleEditHumor(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        await api.put(`/humor/edit/${params.edit}`, {
            humor: rating, 
            quando: formData.get('quando')
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push('/humor/view')
    }

    const [rating,setRating] = React.useState(0)

    return(
        <form className="grid grid-rows-1 place-content-center gap-3 pt-5" onSubmit={hundleEditHumor}>
            <label htmlFor="">Quando:</label>
            <input className="rounded-md" type="datetime-local" />
            <label htmlFor="">Humor</label>
            <div>
                <Rating count={5} value={rating} edit={true} className="flex" onChange={(value) => {
                    setRating(value)
                }}></Rating>
            </div>

            <button type="submit" className="my-5 text-white-Light rounded-sm bg-green-Dark">Enviar</button>
        </form>
    )
}