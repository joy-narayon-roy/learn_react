import {useState,memo,useCallback} from 'react';

function showCountComponent({count,title}){
    console.log(`${title} render`);
    return (<p>{title} is {count}</p>)
}
const ShowCount = memo(showCountComponent);


const Title = memo(()=>{
    console.log('Title render')
    return (<h4 class="text-center">Learn useCallback()</h4>)
});

function buttonComponent({children, handler}) {
    console.log('Button render');
    return (<button onClick={handler} class="btn btn-danger">{children}</button>)
}
const Button = memo(buttonComponent)

export default function UseState() {
    
    const [count1,setCount1]=useState(0);
    const [count5,setCount5]=useState(0);
    
    
    //Button is re-rendering 
    //So we use useCallback to stop it
    const handler1=useCallback(()=>{
        setCount1(pre=>pre+1)
    },[]);
    
    const handler5=useCallback(()=>{
        setCount5(pre=>pre+5)
    },[]);
    
    
    return (<section class="container my-3 py-3 border">
    <h3 class="text-center border-bottom py-2">Hook</h3>
    <small class="lead text-muted">useCallback()</small>
    <br/>
    <small class="lead text-muted">useEffect()</small>
    <hr/>
    {/*<Title />*/}
    <Title />
    <ShowCount count={count1} title="Count - 1" />
    <Button handler={handler1}>Add 1</Button>
    <hr/>
    <ShowCount count={count5} title="Count - 5" />
    <Button handler={handler5}>Add 5</Button>
    </section>
    )
}