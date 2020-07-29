import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";

const pagina404 = () => (<div>Pagina 404</div>);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/cadastro/video" component={CadastroVideo}></Route>
            <Route path="/cadastro/categoria" component={CadastroCategoria}></Route>
            <Route component={pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);