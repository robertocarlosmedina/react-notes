import  React, { useState } from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import DespesaItem from './DespesaItem'
import Filter from '../filtroDespesa/filtro'


function Despesa(props){
    const [filtroAno, setFiltroAno] = useState("2021")

    const filterChangeHandler = (anoSelected) => {
        setFiltroAno(anoSelected)
        // console.log(filtroAno)
    }

    return (
        <Card style="card" >
            {/* // the function onChangeFilter is passed to the Filter and when called it will be executed where. */}
            <Filter selected={filtroAno} onChangeFilter={filterChangeHandler}/>
            {props.despesas.map((despesa, i) => (
                <DespesaItem despesa={despesa} key={i}/>
            ))};
        </Card>
    )
}

export default Despesa