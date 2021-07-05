import React from 'react';
import ClickCounter from './RP/ClickCounter.jsx'
import HoverCounter from './RP/HoverCounter.jsx'
import Counter from './RP/Counter.jsx'

class RenderProps extends React.Component{
    
    render(){
        return (<section class="border my-3 py-2">
            <div class="container">
                <h3 class="text-center border-bottom py-2">Render Props</h3>
                <p class="lead text-justified text-muted">This is similar of <b>Higher Order Component (HOC). </b></p>
            <Counter render={(count,counter)=><HoverCounter count={count} counter={counter} />} />
            <Counter render={(count,counter)=><ClickCounter count={count} counter={counter} />} />
            </div>
            
            {/*<Counter>{(count,counter)=><ClickCounter count={count} counter={counter}/>}</Counter>*/}
            
        </section>)
    }
}

export default RenderProps;