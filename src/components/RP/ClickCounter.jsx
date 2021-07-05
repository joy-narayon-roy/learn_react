export default function ClickCounter(props) {
    const {count,counter} = props;
    
    return (<button class="btn btn-warning" onClick={counter} type="button">Click at {count} time</button>)
}