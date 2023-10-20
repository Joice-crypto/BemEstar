'use client'

import { api } from "@/lib/api"
import Cookie from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import React from "react"
import { FormEvent } from "react"
import Rating from "./Rating"

export function EditSonoForm() {
    const router = useRouter()
    const params = useParams()
    const token = Cookie.get('token')

    async function handleEditSono(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        await api.put(`/sono/edit/${params.edit}`, {
            avaliacao: rating,
            inicio: formData.get('inicio'),
            fim: formData.get('fim')
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push('/sono/view')
    }
    const [rating, setRating] = React.useState(0);

    return (
        <div>
            <form className="grid grid-rows-1 place-content-center gap-4 pt-5" onSubmit={handleEditSono}>

                <label htmlFor="">Inicio do Sono</label>
                <input className="rouded-md" name="inicio" type="datetime-local" />
                <label htmlFor="">Fim do Sono</label>
                <input className="rouded-md" name="fim" type="datetime-local" />
                <label htmlFor="">Qualidade do Sono:</label>
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