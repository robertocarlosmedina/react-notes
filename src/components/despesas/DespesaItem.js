import  React, { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import DataDespesa from './Data'


function DespesaItem(props){

    const [desc, setDesc] = useState(props.despesa.descricao);

    
    const clickHandle = (id=null) =>{
        setDesc("Atualizado")
    }

    return (
        <Card className="despesas" >
            <div className="expense-item">
                <DataDespesa data={props.despesa.data}/>
                <div className="expense-item__description">
                    <h2>{desc}</h2>
                    <div className="expense-item__price">{props.despesa.preco}$00</div>
                <button onClick={clickHandle} className="edit">Edit</button>
                </div>
            </div>
        </Card>
    )
}

export default DespesaItem