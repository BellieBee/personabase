import React from "react"
import Card from './Card'

//function en javascript actualizado

const CardList = ({cards}) => (
    <div>
        { cards.map((card) => (
            <Card
                key={card.id}
                {...card}
                //en esta modalidad podemos pasar todo el objeto card con todas sus propiedades sin tener que enumerarlas en props
                /*title={card.title}
                description={card.description}
                img={card.img}*/
            />
        )) }
    </div>
)
/*function CardList(props){
    return(
        <div>
            { props.cards.map((card) => {
                return(
                    <Card 
                        title={card.title}
                        description={card.description}
                        img={card.img}
                    />
                )
            }) }
        </div>
    )
}*/

export default CardList