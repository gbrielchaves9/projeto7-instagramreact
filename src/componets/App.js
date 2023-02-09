import NavBar from "./NavBar"
import Corpo from "./Corpo"
import SideBar from "./SideBar"
import Usuario from "./Usuario"
import Stories from "./Stories"
import Posts from "./Posts"
import Sugestoes from "./Sugestoes"

export default function App() {
    return (
        <>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Corpo />
                    <Stories />
                    <Posts/>
                </div>
                <div class="sidebar">
                    <Usuario />
                    <SideBar />
                    <Sugestoes/>

                </div>
            </div>
        </>


    )
}