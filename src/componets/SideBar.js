import Usuario from "./Usuario"
import { useState } from "react"

export default function SideBar() {
    const [Pega , setMuda ]= useState("Zeus bolado")

    function PegaNome() {
        const novoN = prompt("fala seu nome ai para ficar bonito ")
        setMuda(novoN)
    }

    return (
        <div class="sidebar">
             <Usuario PegaNome={PegaNome} Pega={Pega} sub={"SubNome"} fts={"./assets/img/9gag.svg"} 
                />
        </div>
    )
}