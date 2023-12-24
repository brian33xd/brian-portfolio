

export const categorias = (categori) => {
    if (categori.length == 2) {
        return (
            <>
                <span className="proyect__categorie">{categori[0]}</span>
                <span className="proyect__categorie">{categori[1]}</span>
            </>)
    }
    else if (categori.length == 3) {
        return (
            <>
                <span className="proyect__categorie">{categori[0]}</span>
                <span className="proyect__categorie">{categori[1]}</span>
                <span className="proyect__categorie">{categori[2]}</span>
            </>)
    }
    else if (categori.length == 4) {
        return (
            <>
                <span className="proyect__categorie">{categori[0]}</span>
                <span className="proyect__categorie">{categori[1]}</span>
                <span className="proyect__categorie">{categori[2]}</span>
                <span className="proyect__categorie">{categori[3]}</span>
            </>)
    }
}