import { LogInPage } from "./login"
import { redirect } from "next/navigation"

const Login: React.FC = async () => {
    const isAuth = false;
    // const isAuth = await checkIsAuth();

    if (isAuth) {
        redirect('/')
    } else {
        return <LogInPage/>
    }
}

export default Login