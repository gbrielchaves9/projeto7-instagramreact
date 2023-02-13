
export default function Sugestao(props) {
    return (

        <div class="sugestao">
            <div class="usuario">
                <img src={props.im} />
                <div class="texto">
                    <div class="nome">{props.us}</div>
                    <div class="razao">{props.sts}</div>
                </div>
            </div>

            <div class="seguir">{props.op}</div>
        </div>
    )
}