import React from "react"
import sugufondoImg from "../images/sugufondo.jpg"
import emptyImg from "../images/empty.png"
import "./styles/Card.css"

const Card = ({title, description, img}) => (
    <div className="card mx-auto Fitness-Card" style={{backgroundImage:`url(${sugufondoImg})`}}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img width="100" src={img || emptyImg} className="float-right" alt="raaaa"/>
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

//class Card extends React.Component {

    //esto se hizo para probar las fases de un componente y como controlar su estado en diferentes momentos se antes o después del renderizado

    /*constructor(props) {
        super(props)
        this.state = {
            image : 'https://i.postimg.cc/GmjFHz1V/4c50211202edf011b98235aadd842f4b.jpg'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image : 'https://i.postimg.cc/TwzgNmNW/catoru.jpg'
            })
        }, 5000)
    }*/

    /*render() {
        const {title, description, img} = this.props
        return (
            <div className="card mx-auto Fitness-Card" style={{backgroundImage:`url(${sugufondoImg})`}}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img width="100" src={img || emptyImg} className="float-right" alt="raaaa"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}*/

export default Card