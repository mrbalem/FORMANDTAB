import React, { useState } from 'react';
import Form from './components/form';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import { Button } from 'react-bootstrap';

const App = props => {

  const [data, setdata] = useState({})
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [statussend, setstatussend] = useState(false);

  const getResponsedata = res => {
    setdata(res)
  }

  const getvisible = res => {
    setstatussend(res)

    // codigo para enviar la dara a cualquier base de datos
    //    ....
    //
    
    if(showMessage === true){
      setShowMessage(!showMessage)
      }
    setstatussend(false)
  }

  
  // const mostrarformulario = () => {
  //   setformsatus(!formstatus)
  // }

  const message = () => {
    setShowMessage(true)
  }

  console.log(data)


  const ejem = [
    {
      "type": "input",
      "data": [
        {
          "name": "usuarios",
          "type": "text",
          "icon": "fas fa-user"
        },
        {
          "name": "correo",
          "type": "email",
          "icon": "fas fa-envelope-open-text"
        },
        {
          "name": "clave",
          "type": "password",
          "icon": "fas fa-unlock-alt"
        }
      ]
    },
    {
      "type": "select",
      "data": [
        {
          "name": "sexo",
          "icon": "fas fa-male",
          "value": [
            {
              "name": "Mujer"
            },
            {
              "name": "Hombre"
            }
          ]
        }
      ]
    }
  ]


  return (
    <div>
      {
        statussend &&
        <div>  cargando.... </div>
      }


     {showButton && (

       <Button
       onClick={message}
       >
          Show Message
       </Button>

     )}

      <CSSTransition
      in={showMessage}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEnter={() => setShowButton(false)}
      onExited={() => setShowButton(true)}
      >

      <Form visible={getvisible.bind()} callback={getResponsedata.bind()} data={ejem} title="Registrar usuario" ></Form>          
      </CSSTransition>

    </div>
  );
}

export default App;
