export default function Usuario(props) {
    return (
        <div class="usuario">
              <img src={props.oms} />
            <div class="texto">
                <span>
                    <strong>{props.usuarios}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}