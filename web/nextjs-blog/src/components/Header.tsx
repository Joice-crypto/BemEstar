import {cookies} from 'next/headers'
import { Profile } from './Profile'

export function Header(){

    const isAuth = cookies().has('token')

    return(

        <div>
            <header className="bg-blue-Normal  h-20 grid grid-rows-1 grid-flow-col gap-x-1">
               <a href="/inicio"><div className="text-green-Dark text-xl font-sans p-9 " >Bem Estar</div></a> 
                <ul className=" grid grid-rows grid-flow-col">
                   <a href="/sono/new"><li className=" hover:text-green-Normalhover p-10">Sono</li></a> 
                   <a href="/humor/new"> <li className=" hover:text-green-Normalhover p-10">Humor</li></a>
                   <a href="/atividades/new"> <li className=" hover:text-green-Normalhover p-10">Atividade Fisica</li></a>
                    <a href="/alimentacao/new"><li className=" hover:text-green-Normalhover p-10">Alimentação</li></a>
                 {isAuth ? <Profile/> :  <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}><li className="pt-3 mt-7 mb-7 mr-6 text-center text-white-Light bg-green-Darkhover rounded-full">Entrar</li></a>  }  
                </ul>
            </header> 
        </div>
    )
}