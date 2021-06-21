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
    
    const filteredDespesas = props.despesas.filter(despesa =>{
        return despesa.data.getFullYear().toString()===filtroAno
    });

    return (
        <Card style="card" >
            {/* // the function onChangeFilter is passed to the Filter and when called it will be executed where. */}
            <Filter selected={filtroAno} onChangeFilter={filterChangeHandler}/>
            
            {filteredDespesas.map((filteredDespesa, i) =>(
                <DespesaItem despesa={filteredDespesa} key={i}/>
            ))};
        </Card>
    )
}

export default Despesa