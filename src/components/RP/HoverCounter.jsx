export default function HoverCounter(props) {
    const {count,counter} = props;
    return (<h4 onMouseOver={counter} class="text-center text-muted">Hover at {count} time.</h4>)
}