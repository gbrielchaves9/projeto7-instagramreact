import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const sugest = [
        { us: "bad.vibes.memes", im: "./assets/img/bad.vibes.memes.svg", sts: "Segue você", op: "Seguir" },
        { us: "chibirdart", im: "./assets/img/chibirdart.svg", sts: "Segue você", op: "Seguir" },
        { us: "razoesparaacreditar", im: "./assets/img/razoesparaacreditar.svg", sts: "Novo no Instagram", op: "Seguir" },
        { us: "adorable_animals", im: "./assets/img/adorable_animals.svg", sts: "Segue você", op: "Seguir" },
        { us: "mallcutecats", im: "./assets/img/smallcutecats.svg", sts: "Segue você", op: "Seguir" }
    ]
    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugest.map((l) => {
                return <Sugestao us={l.us} im={l.im} sts={l.sts} op={l.op}
                />
            })}
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    )
}