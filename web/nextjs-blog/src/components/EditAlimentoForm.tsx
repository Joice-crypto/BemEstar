'use client'

import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';
import Cookie from 'js-cookie'
import { FormEvent } from 'react';
import { api } from '@/lib/api';
import { MediaPicker } from '@/components/MediaPicker';

export  function EditAlimentoForm(){

    const router = useRouter();
    const params = useParams()

    const token = Cookie.get('token')

    async function hundleEditAlimento(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const fileToUpload = formData.get('fotoUrl')

        let fotoUrl = ''

        if(fileToUpload){
            const uploadFormData = new FormData()
            uploadFormData.set('file' , fileToUpload)
            const uploadResponse = await api.post('/upload' , uploadFormData)

            fotoUrl = uploadResponse.data.fileURL
        }

        await api.put(`alimentacao/edit/${params.edit}` , {
            fotoUrl,
            nome: formData.get('nome'),
            quando: formData.get('quando')
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        router.push('/alimentacao/view')
    }

    return (
        <form className='grid grid-rows-1 place-content-center gap-4 pt-5' onSubmit={hundleEditAlimento}>  
        <label htmlFor="">Nome:</label>
        <input name='nome' type="text" className='rounded-md' />
        <label htmlFor="">Data:</label>
        <input name='quando' type="datetime-local" className='rounded-md' />
        <label htmlFor="">Anexar Imagem</label>
        <MediaPicker></MediaPicker>
        <button type='submit' className='my-5 text-white-Light rounded-md bg-green-Dark'>Enviar</button>
        </form>
    )
}