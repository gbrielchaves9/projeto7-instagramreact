import { useState } from "react"
import { FaRocket } from 'react-icons/fa';

export default function Post(props) {

    const [escolhido , setPega] = useState(false)
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoP} />
                {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name={props.mais}></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.fotoG}  />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={escolhido? "vermelho" : "" } onClick={()=> setPega(!escolhido)} name={props.icone1}></ion-icon>
                        <ion-icon name={props.icone2}></ion-icon>
                        <ion-icon name={props.icone3}></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={props.iconeBaixo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.fotoM} />
                    <div class="texto">
                        Curtido por <strong>{props.Curtido}</strong> e <strong>outras {props.Npessoas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
