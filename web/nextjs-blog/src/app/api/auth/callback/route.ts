import { api } from "@/lib/api"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const code = searchParams.get('code')
    const redirectTo = request.cookies.get('redirectTo')?.value

    const registerResponse = await api.post('/register',{
        code,
    })

    const {token} = registerResponse.data

    const redirectURL =  redirectTo  ?? new URL('/inicio', request.url)

    const cookiesExpiresInSecons = 60 * 60 * 24 * 30 // 30 dias

    return NextResponse.redirect(redirectURL, {
        headers:{
            'Set-cookie': `token=${token}; Path=/; max-age=${cookiesExpiresInSecons}`
        }
    })
}
