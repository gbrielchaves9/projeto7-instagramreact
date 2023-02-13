import Story from "./Story"
export default function Stories() {
    const pessoas = [
        { usuario: "6gag", ft: "assets/img/9gag.svg" },
        { usuario: "meowed", ft: "assets/img/meowed.svg" },
        { usuario: "barked", ft: "assets/img/barked.svg" },
        { usuario: "nathan", ft: "assets/img/nathanwpylestrangeplanet.svg" },
        { usuario: "wawawicomics", ft: "assets/img/wawawicomics.svg" },
        { usuario: "respondeai", ft: "assets/img/respondeai.svg" },
        { usuario: "filomoderna", ft: "assets/img/filomoderna.svg" },
        { usuario: "memeriagourmet", ft: "assets/img/memeriagourmet.svg" }
    ]
    return (
        <div class="stories">
            {pessoas.map((g) => {
                return <Story usuario={g.usuario} ft={g.ft}
                />
            })}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}