import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const LoginPage: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
        router.push('/')   
    }
        
    })
    return (
        <div>
            <h2>Login Page</h2>
        </div>
    )

}

export default LoginPage