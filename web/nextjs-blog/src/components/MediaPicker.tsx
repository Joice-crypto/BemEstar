'use client'
import { Camera } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export function MediaPicker(){
    const [previw , setPreviw] = useState <string | null > (null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>){

        const { files} = event.target 

        if(!files) {
            return
        }

        const previwURL = URL.createObjectURL(files[0])

        setPreviw(previwURL)
    }


   

    return(
    <div>
            <div className='grid grid-flow-col'>
            <label htmlFor="">Anexar imagem </label>
            <Camera className='w-4 h-4'/>
            </div>
            <input type="file" onChange={onFileSelected} name="fotoUrl" id='media' accept='image/*' />

            {previw && <img src={previw} alt="" className='h-[150px] w-[120px] object-cover'></img>}
    </div>
        
    )
}