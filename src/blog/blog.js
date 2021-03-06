import React from "react";
import './blog.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MyForm from "./formularz";
import About from "./about";
import LifecycleTest from "./lifecycleTest";
import Parent from "./dodawanie";

export default function RouterExample() {
    return (<Router>
            <div >
                <ul className="link">
                    <li >
                        <Link to="/formularz">Formularz</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/lifecycleTest">Licznik</Link>
                        </li>
                    <li>
                            <Link to="/dodawanie">Dodawanie</Link>
                        </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route path="/formularz">
                        <MyForm/>
                    </Route>
                    <Route path="/lifecycleTest">
                        <LifecycleTest/>
                    </Route>
                    <Route path="/dodawanie">
                        <Parent/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>);
    }
}

//#61dafb
//https://www.nafrontendzie.pl/routing-reactjs-wprowadzenie-react-router