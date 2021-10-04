import React from "react"
import FatalError from "./500"
import NewItem from "./NewItem"
import url from "../config"

class NewItemContainer extends React.Component {

    //inicializamos el estado como objeto vacio y le asignamos otro objeto donde guardaremos el estado del formulario
    state = {
        form: {
            title:'',
            description:'',
            img:''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        //queremos almacenar los datos de los campos en el estado del componente
        //esta es la forma arcaica sin ES7 ni Babel
        /*let partialState = {} //primero declaramos un objeto
        partialState[e.target.name] = e.target.value //segundo asignamos el valor del evento al name dentro del objeto
        this.setState(partialState) //finalmente guardamos el objeto en el estado del componente*/

        //ahora, esta es la forma actualizada con ES7 y Babel
        this.setState({
            form: {
                ...this.state.form, //esto permite que se mantengan las actualizaciones de estado anteriores y no se sobreescriba la key con datos nuevos
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/personas`, config)
            let json = await res.json()
            console.log(json)

            this.setState({
                loading: false
            })

            this.props.history.push('/dashboard')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    } 

    render() {
        if(this.state.error)
            return <FatalError />
        return (
            <NewItem
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default NewItemContainer