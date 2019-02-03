import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import history from './history';
import login from './Component/login'
import group from './Component/group'
import todo from './Component/todo'
import store from './store'

import { Provider } from 'react-redux'
class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Route exact path='/' component={login}></Route>
                        <Route path='/group' component={group}></Route>
                        <Route  path='/todo' component={todo}></Route>
                    </div>
                </Router>
            </Provider>

        )
    }
}
ReactDOM.render(<Provider store={store}>
    <Index />
</Provider>, document.getElementById('root'));