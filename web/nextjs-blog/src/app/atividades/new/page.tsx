import { NewAtividadeForm } from "@/components/NewAtividadeForm";

export default function NewAtividadeFisica(){
    return(
        <div>
            <p className="p-5 text-center text-xl">Atividade Fisica</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
                <NewAtividadeForm></NewAtividadeForm>
            </div>
        </div>
    )
}