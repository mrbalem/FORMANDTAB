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

  //AddButton()

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

   const title = {
    // background: "linear-gradient(-50deg, red, blue)",
     fontSize: "25px",
     //paddingTop: "80px",
     color: "#ffffff", 
     textAlign: "center", 
     //padding: "0.5em",
      
   }
   const body = {
     padding: "1em",
     //background: "#EEF1F7" 
   }

   
   const style = {
         "title": title,
         "body": body, 
         //"position": position
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
              "name": "rony",
              "icon": "dkasld",
              "value": [
                {
                  "name": "hola"
                },
                { "name": "gaa"}
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

      <Form style={style} login={true} buttonName={"Ingresar"} visible={getvisible.bind()} callback={getResponsedata.bind()} data={ejem} title="Login" ></Form>

      </CSSTransition>

    </div>
  );
}

export default App;
