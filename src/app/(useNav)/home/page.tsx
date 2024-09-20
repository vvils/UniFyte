import { redirect } from "next/navigation";
import HomePage from "./home"

const Home: React.FC = async () => {
    // TODO: something
    const isAuthenticated = true;

    if (!isAuthenticated) {
        redirect("/login")
    } else {
        return <HomePage/>
    }
}

export default Home;