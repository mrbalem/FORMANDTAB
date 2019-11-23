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
