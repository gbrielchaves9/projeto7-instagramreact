import Usuario from "./Usuario"

export default function SideBar() {
 const muda= [
    { usuarios: "catanacasdsadomics", oms: "./assets/img/9gag.svg" }
 ]
    return (
        <div class="sidebar">
             {muda.map((r) => {
                return <Usuario usuarios={r.usuarios} oms={r.oms}
                />
            })}
        </div>
    )
}