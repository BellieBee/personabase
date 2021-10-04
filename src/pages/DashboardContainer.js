import React from "react"
import Dashboard from "./Dashboard"
import Loading from "../components/Loading"
import FatalError from "./500"
import useFetch from "../hooks/useFetch"
import url from "../config"

const DashboardContainer = () => {
    const {data, loading, error} = useFetch(`${url}/personas`)

    if(loading)
        return <Loading />
    if(error)
        return <FatalError />
    return (
        <Dashboard 
            data={data}
        />
    )
}

export default DashboardContainer

//class DashboardContainer extends React.Component {

    //vieja manera de declarar constructor y establecer el estado inicial, sin babel ni es7
    //se uso antes para probar con datos setteados pero ahora lo corremos por un API en Express editada
   /* constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Gojo Satoru",
                "description": "shame of you for loving me",
                "img": "https://i.postimg.cc/TwzgNmNW/catoru.jpg",
            }, 
            {
                "id": 2,
                "title": "Geto Suguru",
                "description": "I would never be happy in a world like this",
                "img": "https://i.postimg.cc/sDPj3Dzq/tumblr-fd6324d2eda5ef8568f24ba8d1f135ed-4bfb012a-400.png",
            },
            {
                "id": 3,
                "title": "Ryomen Sukuna",
                "description": "what a waste of talent",
                "img": "https://i.postimg.cc/Ssm3rfVC/Fushiguro-Megumi-full-3329775.jpg",
            }]
        }
    }*/

    //NOTA: recuerda colocar la data del estado entre corchetes para que no tengas problemas con la funcion map, ya que ella espera recibir un array

    /*state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchPersonas()
    }

    fetchPersonas = async () => {

        try {
            let res = await fetch('http://localhost:8000/api/personas')
            let data = await res.json()

            this.setState({
                data, 
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error //en expresiones de javascript cuando una variable tiene el mismo valor es suficiente con colocar el nombre
            })
        }
        
    }

    render() {
        if(this.state.loading)
            return <Loading />
        if(this.state.error)
            return <FatalError />
        //se usa React Fragments para encapsular los demás componentes en lugar de div
        return (
            <Dashboard 
                data={this.state.data}
            />
        )
    }
}

export default DashboardContainer*/