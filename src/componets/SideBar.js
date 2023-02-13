import Usuario from "./Usuario"
import { useState } from "react"

export default function SideBar() {
    const [Pega , setMuda ]= useState("Zeus bolado")
    const [fts , setIMG]=useState("./assets/img/9gag.svg")
    


    function PegaNome() {
        const novoN = prompt("fala seu nome ai para ficar bonito ")
        setMuda(novoN)
    }

    return (
        <div class="sidebar">
             <Usuario PegaNome={PegaNome} Pega={Pega} sub={"SubNome"} fts={fts}  setIMG={setIMG}
                />
        </div>
    )
}