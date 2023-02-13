import Post from "./Post"
import { FaRocket } from 'react-icons/fa';

export default function Posts() {
    const postagem = [
        {
            nome: "meowed", fotoP: "./assets/img/meowed.svg", mais: " ellipsis-horizontal",
            fotoG: "./assets/img/gato-telefone.svg", icone1: "heart-outline", icone2: "chatbubble-outline", icone3: "paper-plane-outline",
            iconeBaixo: "bookmark-outline", Curtido: "respondeai", Npessoas: "outras 101.523 pessoas",fotoM:"./assets/img/respondeai.svg"
        },
        {
        nome: "meowed2", fotoP: "./assets/img/meowed.svg", mais: " ellipsis-horizontal",
        fotoG: "./assets/img/gato-telefone.svg", icone1: "heart-outline", icone2: "chatbubble-outline", icone3: "paper-plane-outline",
        iconeBaixo: "bookmark-outline", Curtido: "respondeai", Npessoas: "outras 101.523 pessoas",fotoM:"./assets/img/respondeai.svg"}
        
    ]


    return (
        <div class="posts">
            {postagem.map((f) => {
                return <Post nome={f.nome} fotoP={f.fotoP} mais={f.mais} fotoG={f.fotoG} icone1={f.icone1}
                    icone2={f.icone2} icone3={f.icone3}  iconeBaixo={f.iconeBaixo} Curtido={f.Curtido}
                    Npessoas={f.Npessoas}  fotoM={f.fotoM} 
                />
            })}

        </div>
    )
}


/*function Fas() {


    <div class="posts">

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src="assets/img/meowed.svg" alt="meowed" />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src="assets/img/barked.svg" alt="barked" />
                    barked
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src="assets/img/dog.svg" alt="dog" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
                    <div class="texto">
                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
}*/