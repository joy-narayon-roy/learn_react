
import useWindoweidth from './customHook/useWindowwidth.js'


export default function UseState() {
    const widthType = useWindoweidth(900)
    console.log(useWindoweidth());
    
    return (<section class="container my-3 py-3 border">
    <h3 class="text-center border-bottom py-2">Hook</h3>
    <small class="lead text-muted">Use our own, home made, custom hook :- useWindoweidth()</small>
    <hr />
    <div class="container-fluids">
    	<b>Window type - {widthType}</b>
    </div>
    </section>
    )
}