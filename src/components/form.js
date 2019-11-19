import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import {
    Button,
    Input
} from 'reactstrap';


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

    return (
        <div style={{ borderRadius: "1em", width: "400px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            <div style={{ background: "linear-gradient(-90deg, red, blue)", fontSize: "25px", color: "#ffffff", textAlign: "left", padding: "0.5em" }}>
                <span>  {props.title} </span>
            </div>
            <div style={{ padding: "1em", background: "#EEF1F7" }}>
                <form onSubmit={handleSummit}>

                    {
                        props.data !== undefined ?
                            props.data.map((selec, index) =>
                                selec.type === "input" ?
                                    <div key={`input-${index}`}>

                                        {selec.data.map((datas, index) =>
                                            <div style={{ padding: "0.5em", textAlign: "justify" }} key={`inputdata-${index}`}>

                                                <i className={datas.icon}></i> <span>   {datas.name}: </span> <br /> <br /> <Input required type={datas.type} style={{ padding: "0.5em", width: "100%" }} name={datas.name} placeholder={datas.name} />

                                            </div>
                                        )
                                        }

                                    </div>
                                    :
                                    selec.type === "select" ?
                                        <div key={`select-${index}`}>

                                            {selec.data.map((datass, index) =>
                                                <div style={{ padding: "0.5em", textAlign: "justify" }} key={`selectdata-${index}`}>
                                                    <i className={datass.icon}></i>     <span> {datass.name}: </span>  <br /> <br /> <select style={{ padding: "0.5em", width: "100%" }} name={datass.name}>
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
                    <div style={{ textAlign: "end" }}>
                        <div style={{ paddingRight: "0.5em", display: "flex", justifyContent: "space-between", paddingLeft: "0.5em" }}>
                            <Button onClick={() => props.visible(false)} > cancelar </Button>
                            <Button> enviar </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;