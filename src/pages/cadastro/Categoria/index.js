import * as React from 'react';
import PageDefault from "../../../components/PageDefault";
import {Link} from "react-router-dom";

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form action="">
                <label htmlFor="">
                    Nome da Categoria
                </label>
                <input type="text"/>
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;