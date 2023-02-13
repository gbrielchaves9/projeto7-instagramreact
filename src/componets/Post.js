import { useState } from "react"
import { FaRocket } from 'react-icons/fa';

export default function Post(props) {

    const [escolhido , setPega] = useState(false)
    const [clicado  , setPegaEsse] = useState(false)
    const [contador ,setConta]= useState(props.Npessoas)
    function contaLick(){
        if(escolhido===false){setConta(contador+(parseInt(1)))}
        else{setConta(contador-1)}
        setPega(!escolhido)
    }

    function curteFoto(){
        if(escolhido===false){setConta(contador+1)}
        setPega(true)

    }

    return (
        <div class="post"  data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.fotoP} />
                {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name={props.mais}></ion-icon>
                </div>
            </div>

            <div class="conteudo"  data-test="post-image" onClick={curteFoto} > 
                < img src={props.fotoG}  />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={escolhido? "vermelho" : "" } onClick={contaLick} name={escolhido?"heart" : "heart-outline"}data-test="like-post" ></ion-icon>
                        <ion-icon name={props.icone2}></ion-icon>
                        <ion-icon name={props.icone3}></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={()=> setPegaEsse(!clicado)}name={clicado ?"bookmark" : "bookmark-outline"} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.fotoM} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.Curtido}</strong> e <strong>outras {Number(contador)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
