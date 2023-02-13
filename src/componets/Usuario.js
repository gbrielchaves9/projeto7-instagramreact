export default function Usuario(props) {
    function PegaFoto(){
        const fotorecebida = prompt("me manda uma foto maneira ")
        props.setIMG(fotorecebida)
    }
    return (
        <div class="usuario">
            <img src={props.fts} onClick={PegaFoto} data-test="profile-image"/>
            <div class="texto" data-test="name">
            <strong> {props.sub}</strong>
                <span>
                    <strong> {props.Pega} </strong>
                    <ion-icon name="pencil" onClick={props.PegaNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}