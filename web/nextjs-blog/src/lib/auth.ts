import { cookies } from "next/headers"
import jwtDecode from "jwt-decode"

interface User {
    sub: string
    name: string
}

export function getUser():User{
    const token = cookies().get('token')?.value

    if(!token){
        throw new Error('Unauthenticad')
    }
    const user: User = jwtDecode(token)

    return user
}