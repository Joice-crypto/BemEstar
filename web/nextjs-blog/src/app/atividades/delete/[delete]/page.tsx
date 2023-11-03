'use client'

import { api } from "@/lib/api"
import  Cookie  from "js-cookie"
import { useParams, useRouter } from "next/navigation"
import { FormEvent } from "react"

export default function DeleteAtividade(){

    const router = useRouter()
    const params = useParams()
    const token = Cookie.get('token') 

    async function DeleteA(event: FormEvent<HTMLFormElement>){
        event.preventDefault()


        await fetch(`http://localhost:3333/atividades/${params.delete}` , {
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: {
                revalidate: 30
            }
    
        })

        alert("Item excluido com sucesso!");
        router.push('/atividades/view')
    }

    return (

        <div>
            <p className="p-5 mt-6 text-center text-xl" >Excluir Atividade Fisica</p>
            <div className="flex justify-center mt-2">
                <form onSubmit={DeleteA}>
                    <p className="pl-10">Tem certeza que deseja exlcuir?</p>
                    <button type="submit" className="bg-red-500 w-28 mb-64 mr-5 h-6 mt-10 text-white-Light" >Excluir</button>
                   <a href="/atividades/view"> <button type="button" className="bg-green-500 w-36 mb-64 h-6 mt-10 text-white-Light" >Voltar ao Inicio</button></a>
                </form>
            </div>
        </div>
    )

}