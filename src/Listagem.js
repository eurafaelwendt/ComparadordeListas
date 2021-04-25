import { Component } from "react";
import './lista.css'

class Listagem extends Component {
    render() {
        const { listaIguais, listaDiferentes } = this.props;

        return (
            <div className="listagem">
                <div>
                    <h3>CÓDIGOS IGUAIS</h3>
                    <li>{listaIguais}</li>
                </div>
                <div>
                    <h3>CÓDIGOS DIFERENTES</h3>
                    <li>{listaDiferentes}</li>
                </div>
            </div>

        );
    }
}

export default Listagem;
