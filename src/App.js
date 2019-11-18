import React, {useState} from 'react';
import Form from './components/form'
import './App.css';

const App = props => {

  const [data, setdata] = useState({})

  const getResponsedata = res => {
          setdata(res)
  }

  console.log(data) 
  

  const ejem = [
    {
      "type": "input",
      "data": [
        {
          "name": "usuarios",
          "type": "text"
        },
        { 
          "name": "correo",
          "type": "email"
        }
      ]
    }
  ]


  const ejem2 = [
    {
      "type": "input",
      "data": [
        {
          "name": "prueba1",
          "type": "text"
        },
        { 
          "name": "clave",
          "type": "password"
        },
        { 
          "name": "clave",
          "type": "password"
        },
        { 
          "name": "clave",
          "type": "password"
        }
        , { 
          "name": "clave",
          "type": "password"
        }
      ]
    }
  ]



  return (
    <div className="App">
     
      <Form  callback={getResponsedata.bind(this)} data={ejem} title="registrar" ></Form>

      <Form  callback={getResponsedata.bind(this)} data={ejem2} title="registrar" ></Form>

    
    </div>
  );
}

export default App;
