import React from 'react';

class TemperatureInput extends React.Component {

    render () {
        let {
            scale,
            data,
            handaler
        } = this.props;

        return (<div>
    <fieldset class="container">
        <legend>Temperature input in {scale}
        <input class="form-control" type="number" name={scale} onChange={handaler} value={data[scale]} />
    </legend>
        </fieldset>
        </div>
        )
    }
}

export default TemperatureInput;