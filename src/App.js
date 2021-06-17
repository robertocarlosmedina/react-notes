import { useState } from 'react'
import Despesa from './components/despesas/Despesa'
import NovaDespesa from './components/novaDespesa/novaDespesa'

function App() {
  const [despesas, setDespesas] = useState([
    { 
      data:new Date(),
      descricao:"Pagar propina",
      preco:9000
    },
    { 
      data:new Date(),
      descricao:"Comprar Carregador",
      preco:2000
    },
    { 
      data:new Date(),
      descricao:"Pagar transcor",
      preco:2530
    },
    { 
      data:new Date(),
      descricao:"Comprar alimentos",
      preco:6000
    },
    { 
      data:new Date(),
      descricao:"Viagem Santo Antão",
      preco:2400
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
