import React from 'react'
import flexbox from './img/flexbox.png'

function StronaGlowna() {
    return (
        <div className="stronaglowna">
            <h1 className="stronaglowna__h1">Sprawdz jak działają właściwości flex-box</h1><br/>
                        <p className="stronaglowna__p">Flexbox to nowa technologia która już ma szerokie wsparcie wśród przeglądarek, dlatego jego używanie staje się coraz bardziej powszechne. Flexbox wykorzystuje narzędzia, które pozwalają na szybkie tworzenie kompleksowego i elastycznego układu strony. Flexbox to jednowymiarowa metoda rozmieszczania elementów w wierszach lub kolumnach, przedmioty rozciągają się aby wypełnić dodatkową przestrzeń lub kurczą się aby dopasować się do mniejszych przestrzeni. W tym artykule zawarto podstawowe informacje na ten temat.</p>
                        <img  className="stronaglowna__img" src={flexbox} alt="flexbox"/>
        </div>
    )
}

export default StronaGlowna
