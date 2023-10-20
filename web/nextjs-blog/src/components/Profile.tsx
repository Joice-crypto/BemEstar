import {getUser} from '@/lib/auth'

export function Profile(){
    const {name } = getUser()

    return(
        <div>
            <div className='p-5' >
            <p>{name}</p>
            <a href="/api/auth/logout" className='text-sm decoration-white-Darkhover'> Quero Sair</a>
            </div>
        </div>
    )

}