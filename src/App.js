import './assets/css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
    return (
        <div className="container pt-3">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;