import React from 'react';
import Home from './Home';
import Treats from './Treats';
import Snacks from './Snacks';
import Toys from './Toys';

import {
    Route,
    Switch,
} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/treats' component={Treats}/>
                    <Route path='/snacks' component={Snacks}/>
                    <Route path='/toys' component={Toys}/>
                </Switch>
            </main>
        )
    }
}

export default Main;