import React from "react"
import DashboardContainer from '../pages/DashboardContainer'
import NewItemContainer from '../pages/NewItemContainer'
import NotFound from '../pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//function en javascript moderno

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/dashboard" component={DashboardContainer}/>
            <Route exact path="/dashboard/newItem" component={NewItemContainer}/>
            <Route component={NotFound} />
        </Switch>
    </Router>
)

/*function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/dashboard/newItem" component={NewItem}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}*/

export default App