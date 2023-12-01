import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const redirectURL = new URL('https://orca-app-wrxy6.ondigitalocean.app/',request.url)

    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=;   Path=/; max-age=0;` 
        }
    })
}