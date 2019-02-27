import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Layout from './hoc/layout';
import Home from './component/Home';
import MovioCinema from './component/MovioCinema';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sharedBool : false
        }
    }
    changeSharedBoolHandler(){
        this.setState({
            sharedBool: !this.state.sharedBool
        })
    }
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact render={ (routeProps) => {
                        return <Home { ...routeProps } { ...this.state } onChangeSharedBool={ () => this.changeSharedBoolHandler()}/>
                    } }/>
                    <Route path="/movio-cinema" component={MovioCinema}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
