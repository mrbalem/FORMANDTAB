import React, { useEffect } from 'react';

// import { CSSTransition } from 'react-transition-group';

const Form = props => {

    const handleSummit = e => {
        //prevenidos el evento de onsumit
        e.preventDefault();

        //declaramos un objeto vacio para poder guardar los datos
        const getData = {};

        //recuperamos los datos del formulario
        const form = new FormData(e.target);

        //hacemos un recorredido al arreglo para recuperar los nombre
        if (props.data !== undefined) {
            props.data.map(dat => {
                dat.data.map(name => {
                    const datos = form.get(`${name.name}`)
                    getData[`${name.name}`] = datos
                })
            })
        }

        //retornamos la funcion con los datos recuperados
        if (props.callback !== undefined && props.visible !== undefined) {
            props.callback(getData)
            props.visible(true)
        }
    }

    //console.log(props.data)

    //style default Formulario
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
        backgroundImage: "url('https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100')"
    }

    //style from title
    const title = {
        fontSize: "25px",
        paddingTop: "80px",
        color: "#ffffff", 
        textAlign: "center", 
    }


    //style contaner from input
    const ContainerInput = {
        borderRadius: "15px", 
        backgroundColor: "#fff", 
        overflow: "hidden", 
        opacity: "1", 
        visibility: "visible", 
        WebkitTransition: "all .3s ease" 
    }

    //style from input

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


    //style from button

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

    return (
        <div style={props.style.position ? props.style.position : body}>
            <div style={{ padding: "0.5em" }}>
                <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "0", cursor: "pointer", color: "#fff", opacity: "1", visibility: "visible" }} onClick={() => props.visible(false)} > <i className="fas fa-arrow-left"></i> </button>
            </div>
            <div style={props.style.title ? props.style.title : title}>
                { props.login &&
                <div> <img style={{height: "130px", width: "130px", borderRadius: "65px"}} src="https://www.zayedhotel.com/addons/default/themes/yoona/img/user.jpg" /> </div>
                }
                <span>  {props.title} </span>
            </div>
            <div style={{padding: "1em"}}>
                <form onSubmit={handleSummit} style={{ padding: "1em" }}>
                    
                    {
                        props.data !== undefined ?
                            props.data.map((selec, index) =>
                                selec.type === "input" ?
                                    <div key={`input-${index}`} style={props.style.ContainerInput ? props.style.ContainerInput :  ContainerInput}>

                                        {selec.data.map((datas, index) =>
                                            <input key={`inputdata-${index}`} required type={datas.type} style={props.style.input ? props.style.input : input} name={datas.name} placeholder={datas.name} />
                                        )
                                        }

                                    </div>
                                    :
                                    selec.type === "select" ?
                                        <div key={`select-${index}`}>

                                            {selec.data.map((datass, index) =>
                                                <div style={{ padding: "0.5em", textAlign: "justify" }} key={`selectdata-${index}`}>
                                                        <select style={{ padding: "0.5em", width: "100%" }} name={datass.name}>
                                                        {datass.value.map((datasss, index) =>
                                                            <option key={`selectvalue-${index}`} value={datasss.name}>{datasss.name}</option>
                                                        )
                                                        }
                                                    </select>
                                                </div>
                                            )}
                                        </div>
                                        :
                                        null
                            )
                            :
                            null

                    }
                    <br />
                    <div>
                    <button style={props.style.button ? props.style.button  : button}> {props.buttonName ? props.buttonName : "Enviar"} </button>
                    </div>
                    <br />

                </form>
            </div>
        </div>
    );
}

export default Form;