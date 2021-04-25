import { Component } from "react";
import './CaixaTexto.css';
import Listagem from "./Listagem.js";

class CaixaTexto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listaPedido: [],
            listaFaturamento: [],
            listaIguais: [],
            listaDiferentes: [],
            evento: false
        }
    }

    escutaListaPedido = event => {
        const value = event.target.value;

        this.setState({
            listaPedido: value
        });
    }

    escutaListaFaturamento = event => {
        const value = event.target.value;

        this.setState({
            listaFaturamento: value
        });
    }

    comparar = () => {
        if ((this.state.listaPedido.length > 0) && (this.state.listaFaturamento.length > 0)) {
            const arrayPedido = this.state.listaPedido.split(',');
            const arrayFaturamento = this.state.listaFaturamento.split(',');
            const iguais = [];
            const diferentes = [];

            for (let a = 0, aux = 0; a < arrayPedido.length; a++) {
                var verify = false;
                for (let b = 0; b < arrayFaturamento.length; b++) {
                    if (arrayFaturamento[b] === arrayPedido[a]) {
                        iguais[b] = arrayFaturamento[b];
                        verify = true;
                    }
                }
                if (verify === false) {
                    diferentes[aux] = arrayPedido[a];
                    aux++;
                }
            }

            setTimeout(() => {
                this.setState({
                    listaIguais: iguais.join()
                });

                this.setState({
                    listaDiferentes: diferentes.join()
                });

                this.setState({
                    evento: true
                });
            }, 0)
        }
    }

    render() {
        return (
            <div className="CaixaTexto">
                <div className="caixas">
                    <div>
                        <label>Códigos do pedido</label><br></br>
                        <textarea onChange={this.escutaListaPedido}></textarea>
                    </div>
                    <div>
                        <label>Códigos do faturamento</label><br></br>
                        <textarea onChange={this.escutaListaFaturamento}></textarea>
                    </div>
                </div>
                <br></br>
                <button onClick={this.comparar}>Comparar listas</button>
                {this.state.evento && <Listagem listaIguais={this.state.listaIguais} listaDiferentes={this.state.listaDiferentes}></Listagem>}
            </div>
        );
    }
}

export default CaixaTexto;
