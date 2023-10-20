import { NewAlimentoForm } from "@/components/NewAlimentoForm";

export default function NewAlimento(){
    return(
        <div>
            <p className="p-5 text-center text-xl">Alimentação</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
            <NewAlimentoForm/>
            </div>
        </div>
    )
}