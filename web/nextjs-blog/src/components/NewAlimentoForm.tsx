'use client'
import { api } from "@/lib/api"
import { FormEvent } from "react"
import {MediaPicker} from "./MediaPicker"
import Cookie from 'js-cookie'
import { useRouter } from "next/navigation"



export function NewAlimentoForm(){
    const router = useRouter()

    async function hundleCreateAlimento(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        

        const formData = new FormData(event.currentTarget)

        const fileToUpload = formData.get('fotoUrl')
        
        let fotoUrl = ''

        if(fileToUpload){
            const uploadFormData = new FormData()
            uploadFormData.set('file',fileToUpload)

            const uploadResponse = await api.post('/upload' , uploadFormData)
            
            fotoUrl = uploadResponse.data.fileURL
         
        }
   
        const token  = Cookie.get('token')
        
        await api.post(
            '/alimentacao',{
              fotoUrl,
              nome: formData.get('nome'),
              quando: formData.get('quando'),
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )

       
        router.push('/inicio')


    }


    return(
        <div className="mb-28 ">
            <form onSubmit={hundleCreateAlimento} className="grid grid-rows-1 place-content-center gap-4 pt-5"> 
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" className='rounded-full'/>
            <label htmlFor="">Data</label>
            <input className='rounded-full' name="quando" type="datetime-local" />
            <MediaPicker></MediaPicker>
            <button type="submit" className='mt-16 mb-5 text-white-Light rounded-full bg-green-Dark'>
                Enviar
            </button>
            </form>

        </div>
    )
}