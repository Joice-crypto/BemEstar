'use client'

import { api } from "@/lib/api"
import  Cookie  from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function DeleteHumor(){

    const router = useRouter()
    const params = useParams()
    const token = Cookie.get('token') 

    async function DeleteH(event: FormEvent<HTMLFormElement>){
        event.preventDefault()


        await api.delete(`/humor/${params.delete}` , {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })

        alert("Item excluido com sucesso!");
        router.push('/humor/view')
    }

    return (

        <div>
            <p className="p-5 mt-6 text-center text-xl" >Excluir Humor</p>
            <div className="flex justify-center mt-2">
                <form onSubmit={DeleteH}>
                    <p className="pl-10">Tem certeza que deseja exlcuir?</p>
                    <button type="submit" className="bg-red-500 w-28 mb-64 mr-5 h-6 mt-10 text-white-Light" >Excluir</button>
                   <a href="/humor/view"> <button type="button" className="bg-green-500 w-36 mb-64 h-6 mt-10 text-white-Light" >Voltar ao Inicio</button></a>
                </form>
            </div>
        </div>
    )

}