import React from "react"
import CardList from '../components/CardList'
import Welcome from '../components/Welcome'
import Button  from "../components/Button"

const Dashboard = ({data}) => (
    //se usa React Fragments para encapsular los demás componentes en lugar de div
    <React.Fragment> 
		<Welcome 
			username="Geto Suguru"
		/>
		<CardList 
            cards={data}
        />
        <Button 
            link="/dashboard/newItem"
            nameButton="+"
        />
	</React.Fragment>
)

export default Dashboard