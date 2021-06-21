import { useState } from 'react'
import Despesa from './components/despesas/Despesa'
import NovaDespesa from './components/novaDespesa/novaDespesa'

function App() {
  const [despesas, setDespesas] = useState([
    { 
      data:new Date("2019-1-2"),
      descricao:"Pagar propina",
      preco:9000
    },
    { 
      data:new Date("2020-1-22"),
      descricao:"Comprar Carregador",
      preco:2000
    },
    { 
      data:new Date("2020-3-4"),
      descricao:"Pagar transcor",
      preco:2530
    },
    { 
      data:new Date("2018-7-21"),
      descricao:"Comprar alimentos",
      preco:6000
    },
    { 
      data:new Date("2020-8-11"),
      descricao:"Viagem Santo Antão",
      preco:2400
    },
    { 
      data:new Date("2021-9-11"),
      descricao:"Viagem Santiago",
      preco:13000
    }
  ])

  const addNewDespesa = (despesa) => {
    console.log(despesa)
    setDespesas(despesas.concat(despesa))
    console.log(despesas)

  }

  return (
    <div>
      <NovaDespesa onChangeAdd={addNewDespesa}/>
      <Despesa despesas={despesas}/>
    </div>
  );
}

export default App;
