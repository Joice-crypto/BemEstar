import { EditAtividadeForm } from "@/components/EditAtividadeForm";

export default async function EditAtividade() {
    return(
        <div>
            <p className="p-5 text-center text-xl"> Editar Atividade Fisica</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
                <EditAtividadeForm></EditAtividadeForm>
            </div>
        </div>
    )
    
}