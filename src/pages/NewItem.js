import React from "react"
import CardForm from "../components/CardForm"
import Card from "../components/Card"

const NewItem = ({form, onChange, onSubmit}) => (
    <div className="row">
        <div className="col-sm">
            <Card {...form} /> 
        </div>
        <div className="col-sm">
            <CardForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>
)

export default NewItem