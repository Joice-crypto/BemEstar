import { NewSonoForm } from "@/components/NewSonoForm";

export default function NewSono(){
    return(
        <div>
            <p className="p-5 text-center text-xl ">Sono</p>
            <div className="w-2/5 ml-96 bg-white-Normal">
                <NewSonoForm></NewSonoForm>

            </div>
        </div>
    )
}