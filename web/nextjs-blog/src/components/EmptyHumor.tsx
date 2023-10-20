export function EmptyHumor(){
    return(
        <div className="flex flex-1 items-center justify-center mb-72 p-16">
            <p className="w-[360px] text-center mt-4 leading-relaxed" >Você ainda não registrou nenhum humor, registre já {''} 
                <a className="underline hover:text-green-Dark" href="/humor/new">criar agora</a> !
            </p>
        </div>
    )
}