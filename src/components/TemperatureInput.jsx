import React from 'react';

/*class TemperatureInput extends Component {
    constructor (props) {
        super(props);
        let scale;
        if (props.scale==="c") {
            scale = "Celsius";
        }
    }

    render () {
        //let {scale} = this.state;
        return (<div>
            <fieldset class="container">
                <legend>Temperature input in {console.log(this)}
                <input class="form-control" type="number" />
                </legend>
        </fieldset>
        </div>
        )
    }
}*/

function TemperatureInput({scale, handler}) {
    
    let scaleInput = "";
    if (scale === "c") {
        scaleInput = "Celsius"
    } else if (scale === "k") {
        scaleInput = "Kalvin"
    }

    let val = 0;
    return (<div>
        <fieldset class="container">
    <legend>Temperature input in {scaleInput}
    <input class="form-control" type="number" onChange={handler} value={val} />
    </legend>
        </fieldset>
    </div>
    )
}

export default TemperatureInput;