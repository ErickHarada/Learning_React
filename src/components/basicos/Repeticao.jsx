import React from 'react';

import Produtos from '../../data/Produtos';

export default props => {

    function getProdutos() {
        return Produtos.map(p => {
            return <li key={p.id}>
                {p.id} - {p.name} - R$ {p.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}