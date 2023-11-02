import { EmptyAlimento } from "@/components/EmptyAlimento";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from "next/headers";


dayjs.locale(ptBr)
export default async function ViewAlimento() {

    const isAuth = cookies().getAll('token')


    if (!isAuth) {
        return <EmptyAlimento></EmptyAlimento>
    }
    const cookieStore = cookies()
   const token =  cookieStore.getAll().map((cookies) => cookies.value)


    const response = await fetch('http://localhost:3333/alimentacao' , {
        headers: {
            Authorization: `Bearer ${token}`
        },
         cache: 'no-store' 

    })

    const alimentos = await response.json()

    if (alimentos.length == 0) {
        return <EmptyAlimento></EmptyAlimento>
    }


    return <div>
       
        <p className="text-center text-xl m-6" >Alimentação</p><div className="justify-center grid grid-rows-1 grid-flow-col" > {
            alimentos.map((alimento: { id: any; fotoUrl: string; nome: string; quando: Date; }) => {
                return (
                    <div>
                        <div className="drop-shadow-xl w-60 mt-6 bg-white-Lighthover" >
                            <img src={alimento.fotoUrl} alt="imagem de uma refeição" />
                            <p className="m-2 text-center pb-5">{alimento.nome}</p>
                            <p className="m-2 pb-5">Data: <time>
                                {dayjs(alimento.quando).format('D [de] MMMM [,] YYYY [as] HH[:]mm')}
                            </time></p>

                            <div className="flex justify-around mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#1F0AAB" className="ml-5 pb-5" width={42} height={45} viewBox="0 0 50 50" >
                                    <a href={`http://localhost:3000/alimentacao/edit/${alimento.id}`}>
                                        <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                                    </a>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fd0808" className="pb-5" width={65} height={68} viewBox="0 0 50 50" >
                                <a href={`http://localhost:3000/alimentacao/delete/${alimento.id}`}>
                                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"></path></a>
                                </svg>


                            </div>


                        </div>

                    </div>
                )
            })
        }</div>
    </div>


}