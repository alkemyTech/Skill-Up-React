
export const getLogin = async (loginUser) => {
    // body structure should look like these
    // '{\n  "email": "messi@messi.com",\n  "password": "messi"\n}'
    try {
        const response = await fetch("http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login", {
            body: loginUser,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export default getLogin