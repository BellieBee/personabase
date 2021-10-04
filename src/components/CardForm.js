import React from "react"

const CardForm = ({onChange, onSubmit, form}) => (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title"
                    name="title"
                    value={form.title}
                    onChange={onChange} 
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="description"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img"
                    name="img"
                    value={form.img}
                    onChange={onChange} 
                />
            </div>
                
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
)

/*class CardForm extends React.Component {

    render() {
        const {onChange, onSubmit, form} = this.props

        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="title"
                            name="title"
                            value={form.title}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="description"
                            name="description"
                            value={form.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="img"
                            name="img"
                            value={form.img}
                            onChange={onChange} 
                        />
                    </div>
                
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}*/

export default CardForm