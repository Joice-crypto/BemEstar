'use client'

import { api } from "@/lib/api"
import Cookie from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function DeleteAlimento(){
    const router = useRouter()
    const params = useParams()
    const token = Cookie.get('token')

    async function Delete(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        await api.delete(`alimentacao/${params.delete}` , {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            
        router.push('/alimentacao/view')
    }

    return(
        <div>
            <p className="p-5 mt-6 text-center text-xl" >Excluir Alimentacão</p>

            <div className="flex justify-center mt-2">
                <form onSubmit={Delete}>

                    <p>Tem certeza que deseja excluir a alimentacao?</p>
                    <button type="submit" className="bg-red-500 w-28 mb-64 h-6 mt-10 text-white-Light" >Excluir</button>
                    <a href="/alimentacao/view"><button type="button" className="bg-green-500 w-36 mb-64 h-6 mt-10 ml-10 text-white-Light" >Voltar ao inicio </button></a>
                </form>
            </div>
        </div>
    )

}