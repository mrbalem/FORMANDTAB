import React from 'react';
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
        if (props.callback !== undefined) {
            props.callback(getData)
        }
    }


    return (
        <div>
            <div style={{ background: "red" }}>
                {props.title}
            </div>
            <div style={{ background: "blue" }}>
                <form onSubmit={handleSummit}>

                    {
                        props.data !== undefined ?
                            props.data.map((selec, index) =>
                                selec.type === "input" ?
                                    <div key={`input-${index}`}>

                                        {selec.data.map((datas, index) =>
                                            <div  key={`inputdata-${index}`}><span> {datas.name} </span>   <input name={datas.name} placeholder={datas.name} />
                                            </div>
                                        )
                                        }

                                    </div>
                                    :
                                    selec.type === "select" ?
                                        <div key={`select-${index}`}>

                                            {selec.data.map((datass, index) =>
                                                <div key={`selectdata-${index}`}>
                                                    <span> {datass.name} </span> <select name={datass.name}>
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
                    <button> enviar </button>
                </form>
            </div>

        </div>
    );
}

export default Form;