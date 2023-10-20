import { EmptyAtividade } from "@/components/EmptyAtividade";
import { EmptySono } from "@/components/EmptySono";
import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from "next/headers";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

dayjs.locale(ptBr)
export default async function ViewAtividades() {
    const isAuth = cookies().has('token')

    if (!isAuth) {
        return <EmptyAtividade></EmptyAtividade>
    }

    const token = cookies().get('token')?.value

    const response = await api.get('/atividades', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    const atividades = response.data

    if (atividades.length == 0) {
        return <EmptyAtividade></EmptyAtividade>
    }

    return (
        <div className="grid justify-items-center">
            <p className="p-5 text-center text-xl" >Atividade Fisica</p>
            <div className="bg-green-Dark h-96 w-[38rem] min-h-full">
                <table>
                    <thead>
                        <tr className=" ml-4 bg-white-Normalhover w-full my-6 grid gap-4 grid-cols-4 ">
                            <th>Nome</th>
                            <th>Quando</th>
                            <th>Descrição</th>
                            <th>Controles</th>
                        </tr>

                    </thead>
                    {atividades.map((atividades: { nome: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; quando: string | number | Date | dayjs.Dayjs | null | undefined; descricao: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; id: any; }  ) => {
                        return (
                            <tbody className="grid grid-cols-1 ml-4 w-full">
                                <tr className="bg-white-Normalhover">
                                    <td className="pl-10">{atividades.nome}</td>
                                    <td className="pl-20"> {dayjs(atividades.quando).format('D[/]M[/]YY [as] HH[:]mm')} </td>
                                    <td className="pl-10">{atividades.descricao}</td>
                                    <td className="pl-10"> <div className="flex justify-around">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width={22}
                                            height={25}
                                            fill="#007f9c"
                                            viewBox="0 0 512 512"

                                        >

                                            <a href={`http://localhost:3000/atividades/edit/${atividades.id}`}>  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /> </a></svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ea1038"
                                        width={22}
                                        height={25}
                                        className="flex mx-2 "
                                        viewBox="0 0 448 512"
                                    >

                                        <a href={`http://localhost:3000/atividades/delete/${atividades.id}`}><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /> </a> </svg>
                                    </div> </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}