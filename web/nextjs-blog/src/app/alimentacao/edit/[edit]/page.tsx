import { EditAlimentoForm } from "@/components/EditAlimentoForm";

export default async function EditAlimento(){

    return(
        <div>
            <p className="p-5 text-center text-xl">Editar Alimentação</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
                <EditAlimentoForm></EditAlimentoForm>
            </div>
        </div>
    )
}