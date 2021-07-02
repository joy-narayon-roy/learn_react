import withCounter from './withCounter.jsx';

function ButtonCounter(props) {
    const {count,incrementCount} = props;
    return (<div class="my-3">
        <button class="btn btn-success" onClick={incrementCount} type="button">Click at {count} time.</button>
    </div>)
}

export default withCounter(ButtonCounter);