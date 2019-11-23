### Debemos importar los compenentes necesarios para su uso.


```jsx

import React, { useState } from 'react';
import Form from './components/form';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import { Button } from 'react-bootstrap';

```

### cambiar el estilo del body del formulario  

```jsx

  // Estilo por defect.
  
   const body = {
        // height: "550px",
        width: "350px",
        borderRadius: "15px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        overflow: "hidden",
        opacity: "1",
        visibility: "visible",
        WebkitTransition: "all .3s ease",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "500px",
        backgroundImage: "url('...')"
    }

```

### cambiar el estilo del titulo

```jsx
  
  // estilo por defecto del titulo
  
  const title = {
        fontSize: "25px",
        paddingTop: "80px",
        color: "#ffffff", 
        textAlign: "center", 
    }

```
### cambiar el estilo del contendor de los input

```jsx

 const ContainerInput = {
        borderRadius: "15px", 
        backgroundColor: "#fff", 
        overflow: "hidden", 
        opacity: "1", 
        visibility: "visible", 
        WebkitTransition: "all .3s ease" 
    }


```


#### cambiar el estilo del input

```jsx
    // estilo por defecto de los input
    
   const input = {
        padding: "0.5em",
        width: "100%", 
        border: "0", 
        outline: "none", 
        boxShadow: "none", 
        height: "50px", 
        lineHeight: "30px", 
        padding: "8px 15px", 
        borderBottom: "1px solid #eee", 
        fontSize: "12px" 
    }
  
```

### cambiar el estilo principal del boton

```jsx
  
  const button = {
        backgroundColor: "rgba(0,0,0,0.4)", 
        color: "rgba(256,256,256,0.7)", 
        border: "0", 
        borderRadius: "15px", 
        display: "block", 
        margin: "15px auto", 
        padding: "15px 45px", 
        width: "100%", 
        fontSize: "13px", 
        fontWeight: "bold", 
        cursor: "pointer", 
        opacity: "1", 
        visibility: "visible", 
        WebkitTransition: "all .3s ease" 
    }

```
### Estructura para instanciar los inputs

```jsx
  
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
              "name": "example",
              "icon": "fas fa-unlock-alt",
              "value": [
                {
                  "name": "1"
                },
                { "name": "2"}
              ]
            }
          ]
    }
  ]

```

### props necesarios del componente

```jsx
   // style => enviamos los estilos necesarios para poder cambiar el estilo del formulario
   /**
        ejemplo:
        const style = {
              "body": body, //body es el objeto que se ha mencionado anteriorment
              "title": title,
              "ContainerInput": ContainerInput,
              "input": input
        }
        
   **/
   
   // login => lo que indicamos es que nos muestre una imagen aleatoria de un usuario para dar una mejor presentacion, si no    // lo desas simplemete lo quitas.
   
   // buttonName => es para cambiar el nombre del boton
   //

<Form style={style} login={true} buttonName={"Ingresar"} visible={getvisible.bind()} callback={getResponsedata.bind()} data={ejem} title="Login" ></Form>

```
