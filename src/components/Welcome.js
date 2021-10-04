import React from 'react'
import './styles/Welcome.css'

//function en javascript moderno

const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}</h1>
            <p>Let's curse each other!</p>
        </div>
    </div>
)

/*function Welcome(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Let's curse each other!</p>
            </div>
        </div>
    )
}*/

export default Welcome