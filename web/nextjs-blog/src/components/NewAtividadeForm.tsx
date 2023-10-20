'use client'

import { api } from "@/lib/api"
import Cookie from "js-cookie"
import { useRouter } from "next/navigation"
import React from "react"
import { FormEvent } from "react"

export function NewAtividadeForm(){
    const router = useRouter()

    async function hundleCreateAtividade(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const token = Cookie.get('token')
        

        await api.post('/atividades', {
            nome:formData.get('nome'),
            quando: formData.get('quando'),
            descricao: formData.get('descricao')
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        )
        
        router.push('/inicio')
    }


    return(
        <div>
            <form className="grid grid-rows-1 place-content-center gap-4 pt-5" onSubmit={hundleCreateAtividade}>

                <label htmlFor="">Nome da Atividade:</label>
                <input className="rouded-md" name="nome" type="text" />
                <label htmlFor="">Quando:</label>
                <input className="rouded-md" name="quando" type="datetime-local" />
                <label htmlFor="">Descrição:</label>
                <input className="rouded-md" name="descricao" type="text" />
                
                <button type="submit" className="my-5 text-white-Light rounded-md bg-green-Dark" >Enviar</button>
            </form>
        </div>
    )
}