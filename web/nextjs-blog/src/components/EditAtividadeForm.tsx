'use client'

import { api } from "@/lib/api"
import Cookie from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import React from "react"
import { FormEvent } from "react"


export function EditAtividadeForm() {
    const router = useRouter()
    const params = useParams()
    const token = Cookie.get('token')

    async function handleEditAtividade(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        await api.put(`/atividades/edit/${params.edit}`, {
            nome: formData.get('nome'),
            quando: formData.get('quando'),
            descricao: formData.get('descricao')
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push('/atividades/view')
    }
   

    return (
        <div>
            <form className="grid grid-rows-1 place-content-center gap-4 pt-5" onSubmit={handleEditAtividade}>

                <label htmlFor="">Nome da Atividade:</label>
                <input className="rouded-md" name="nome" type="text" />
                <label htmlFor="">Quando</label>
                <input className="rouded-md" name="quando" type="datetime-local" />
                <label htmlFor="">Descrição:</label>
                <input className="rouded-md" name="descricao" type="text" />
                
                <button type="submit" className="my-5 text-white-Light rounded-md bg-green-Dark" >Enviar</button>
                </form>
        </div>
    
    )
        

}