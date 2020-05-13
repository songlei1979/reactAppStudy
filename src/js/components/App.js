import React, {Component, Fragment} from "react";
import ReactDom from 'react-dom';
import Header from './Header';
import Dashboard from "./leads/Dashboard";
import { Provider } from 'react-redux'
import store from "../store";

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">

                    </div>
                    <Dashboard />
                </Fragment>
            </Provider>
        )
    }
}


ReactDom.render(<App />, document.getElementById('app'));
