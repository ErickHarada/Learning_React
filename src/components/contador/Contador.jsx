// Pode ser assim também
// import React, { Component } from 'react';
// export default class Contador extends Component { }

import React from 'react';

import './Contador.css';
import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

export default class Contador extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         passo: props.passo,
    //         valor: 0
    //     }
    // }

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        });
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                {/* 
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number"
                        // style={{ fontSize: '1.4rem', width: '60px' }}
                        value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })} />
                </div>
                <h4>Valor: {this.state.valor}</h4> 
                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
                */}

                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>

                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>


            </div >
        )
    }
}

