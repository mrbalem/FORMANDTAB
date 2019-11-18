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
    },
    {
      "type": "select",
      "data": [
        {
          "name": "mesas",
          "value": [
            {
              "name": "holamundo1"
            },
            {
              "name": "hoamundo2"
            }
          ]
        }
      ]
    },
    {
      "type": "input",
      "data": [
        {
          "name": "direccion",
          "type": "text"
        }

      ]
    }

  ]



  return (
    <div className="App">
     
      <Form  callback={getResponsedata.bind(this)} data={ejem} title="registrar" ></Form>
   
    </div>
  );
}

export default App;
