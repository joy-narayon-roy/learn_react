import React, {
    useState,
    useEffect
} from 'react';

export default function UseState() {
    
    const [time,updateTime]=useState(new Date().toLocaleTimeString());
    
    const [count,updateCount]=useState(0);
    
    const add=()=>{
        updateCount(pre=>pre+1)
    }
    
    //This useEffect function run When the timer is updated
    useEffect(()=>{
        let timer = setInterval(()=>updateTime(new Date().toLocaleTimeString()),1000);
        
        //This function run when componentWillUnmount()
        return ()=>{
            clearInterval(timer)
        }
    },[time])
    //This is like componentDidUpdate()
    /*
    useEffect(()=>{
        document.title = 'Learning useEffect Hook.'
        console.log('Title is Updated.');
    })
    */
    /*
    useEffect(()=>{
        document.title = 'Learning useEffect Hook.'
        console.log('Title is Updated.');
    },[count])
    */
    
    useEffect(()=>{
        document.title = 'Learning useEffect Hook.'
        console.log('Title is Updated.');
    },[])
    
    return (<section class="container my-3 py-3 border">
    <h3 class="text-center border-bottom py-2">Hook</h3>
    <small class="lead text-muted">useEffect()</small>
    <h5 class="text-center mt-3">{time}</h5>
    <h5 class="text-center">Click at {count}</h5>
    <button class="btn btn-success" onClick={add}>Count</button>
    </section>
    )
}