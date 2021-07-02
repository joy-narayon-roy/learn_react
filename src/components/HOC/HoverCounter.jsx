import withCounter from './withCounter.jsx';

function HoverCounter(props) {
    const {count,incrementCount} = props;
    return (<div class="my-3">
        <h4 onMouseOver={incrementCount} class="text-center text-muted">Over at {count} time.</h4>
    </div>)
}

export default withCounter(HoverCounter);