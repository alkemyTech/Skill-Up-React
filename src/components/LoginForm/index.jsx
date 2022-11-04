import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"

export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [invalidUser, setInvalidUser] = useState(false)

    const navigateTo = useNavigate()

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi

    const handleForm = async (event) => {
        event.preventDefault()

        try{
            const response = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
            const data = await response.json()
    
            const getUser = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me", {
                method: 'GET',
                headers: { 
                    "Authorization": `Bearer ${data.accessToken}`
                }
            })
    
            const userData = await getUser.json()
    
            if(response.ok){
                localStorage.setItem("accessToken", JSON.stringify(data.accessToken))
                localStorage.setItem("userData", JSON.stringify(userData))
                setInvalidUser(false)

                alert(`Welcome back ${userData.first_name} ${userData.last_name}`)

                navigateTo("/home")
            }else if(!response.ok){
                setInvalidUser(true)
            }

        } catch(error){
            console.log(error)
        }
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)

        if(event.key === "Enter"){
            event.preventDefault()
        }
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)

        console.log(event)
    }

    const handleShowPassword = () => {
        setShowPassword(previous => !previous)
        console.log(event)
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleForm} className="flex flex-col items-center gap-8 p-8 bg-white rounded-md min-w-[350px] max-w-[450px] w-full">
                <Heading as="h2">Login</Heading>
                <div className="flex flex-col gap-4  w-full">
                    <div className="flex flex-col items-start w-full gap-1">
                        <Text as="label" variant="standard">Email</Text>
                        <input type="text" placeholder="johndoe@gmail.com" onChange={handleEmail} className="border border-black rounded-md w-full py-2 px-4 text-sm"/>
                        {
                            email?.length 
                                ? email?.match(emailRegex) ? "" : <Text as="span" className="text-sm text-red-500">Please enter a valid email.</Text>
                                : ""
                        }
                    </div>
                    <div className="flex flex-col items-start w-full gap-1">
                        <Text as="label" variant="standard">Password</Text>
                        <div className="relative w-full">
                            <input type={showPassword ? "text" : "password"} placeholder="••••••••••••" onChange={handlePassword} className="border border-black rounded-md w-full py-2 px-4 text-sm pr-16"/>
                            <button type="button" onClick={handleShowPassword} className="absolute right-0 h-full px-4 text-xs">Show</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Button type="submit" variant="primary" disabled={email?.length && password?.length ? false : true}>Login</Button>
                    {
                        invalidUser ? <Text as="span" className="text-sm text-red-500">Invalid email or password.</Text> : ""
                    }
                    <Text as="a" className="text-ct-primary-300 text-[12px]">Forgot my password</Text>
                </div>
            </form>
        </div>
    )
}
