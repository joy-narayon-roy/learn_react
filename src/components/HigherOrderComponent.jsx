import ButtonCounter from './HOC/ButtonCounter.jsx';
import HoverCounter from './HOC/HoverCounter.jsx';

export default function HigherOrderComponent() {
    
    return (<section class="container my-4 py-3 border">
        
        <h3 class="text-center border-bottom py-2">Higher Order Component</h3>
        <ButtonCounter />
        <HoverCounter />
    </section>)
}