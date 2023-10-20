import { NewHumorForm } from "@/components/NewHumorForm";

export default function NewHumor(){
    return(
        <div>
            <p className="p-5 text-center text-xl ">Humor</p>
            <div className="w-2/5 mb-40 ml-96 bg-white-Normal" >
                <NewHumorForm></NewHumorForm>
            </div>
        </div>
    )
}