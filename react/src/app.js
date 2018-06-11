import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { selectAppReady } from './store/app/selectors';

import {
    About,
    Menu,
} from './components';

class Application extends PureComponent {

    static propTypes = {
        ready: PropTypes.bool,
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    renderApp() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route path="/" exact render={() => <h1>template</h1>} />
                    <Route path="/about" component={About} />
                    <Redirect path="*" to="/" />
                </Switch>
            </div>
        );
    }

    render() {
        return (
            <Router>
                { !this.props.ready ?
                    this.renderLoading() :
                    this.renderApp()
                }
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    ready: selectAppReady(state.app),
});

export default connect(mapStateToProps)(Application);
