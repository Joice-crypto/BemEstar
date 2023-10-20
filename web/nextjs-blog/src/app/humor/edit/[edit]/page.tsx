import { EditHumorForm } from "@/components/EditHumorForm";

export default async function EditHumor(){
    return(
        <div className="mb-44">
        <p className="p-5 text-center text-xl">Editar Humor</p>
        <div className="w-2/5  ml-96 bg-white-Normal" >
            <EditHumorForm></EditHumorForm>
        </div>
        </div>
       
    )
}