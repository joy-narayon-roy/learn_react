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

class TemperatureInput extends React.Component {
    constructor (props){
        super(props);
    }

    render () {
        let {scale,data,handaler} = this.props;
        
return (<div>
    <fieldset class="container">
        <legend>Temperature input in {scale}
        <input class="form-control" type="number" name={scale} onChange={handaler} value={data[scale]}/>
    </legend>
</fieldset>
</div>
)
    }
}

export default TemperatureInput;