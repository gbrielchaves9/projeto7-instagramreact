export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.fts} />
            <div class="texto">
            <strong> {props.sub}</strong>
                <span>
                    <strong> {props.Pega}</strong>
                    <ion-icon name="pencil" onClick={props.PegaNome}></ion-icon>
                </span>
            </div>
        </div>
    )
}