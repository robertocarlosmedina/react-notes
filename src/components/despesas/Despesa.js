import  React, { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import DataDespesa from './Data'
import DespesaItem from './DespesaItem'


function Despesa(props){
    return (
        <Card className="despesas" >
            {props.despesas.map((despesa, i) => (
            //    console.log(despesa);
                    <DespesaItem despesa={despesa} key={i}/>
            ))};
        </Card>
    )
}

export default Despesa