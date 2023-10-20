import { EditSonoForm } from "@/components/EditSonoForm";

export default async function EditSono() {
    return(
        <div>
            <p className="p-5 text-center text-xl"> Editar Sono</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
                <EditSonoForm></EditSonoForm>
            </div>
        </div>
    )
    
}