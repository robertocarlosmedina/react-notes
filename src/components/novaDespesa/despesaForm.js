import React from 'react';

import './ExpenseForm.css';

const FormDespesa = () =>{

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Descrição</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Valor</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" min="2019-01-01" max="2011-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    )
}

export default FormDespesa