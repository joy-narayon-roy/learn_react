import {
	useReducer,
	useEffect
} from 'react';

const initialState = 0;
const reducer = (state, action) => {
		switch (action) {
		case 'increment':
			return state + 1;
			// eslint-disable-next-line
			break;
	    case 'increment2x':
	    	return state *2;
	    	// eslint-disable-next-line
	    	break;
	    
		case 'decrement':
			return state - 1;
			// eslint-disable-next-line
			break;
	    case 'decrement2x':
	    	return state /2;
	    	// eslint-disable-next-line
	    	break;
	    
	    
		default:
			return state;
		}
}
function LoadPost () {
	
	let postData = {
		post:{body:'Loading...'},
		error:null,
		loading:true
	};
	let postReducer = (postData,action) => {
		switch (action.type) {
			case 'ERROR':
				return {
					post:{},
					loading:false,
					error:'Smithing Wrong! '
				}
				// eslint-disable-next-line
				break;
			case 'DONE':
				console.log(action.data);
				return {
					error:null,
					loading:false,
					post:action.data
				}
				// eslint-disable-next-line
				break;
			
			default:
				return {...postData}
		}
	}
	const [postState,postDispatch] = useReducer(postReducer,postData)
	
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()).then(json =>{postDispatch({type:'DONE',data:json})}).catch(err=>{
			postDispatch({type:'ERROR'})
		})},[])
	
	return(<section class="container-fluid my-3">
		<h5 class="text-center">Load Post</h5>
		<div class="card card-body">
			<h5 class="card-title">{postState.post.title}</h5>
			<p class="card-text">
				{postState.loading}
				{postState.post.body}
				{postState.error}
			</p>
		</div>
	</section>)
}

function UseReducer() {

	const [count,
		dispatch] = useReducer(reducer, initialState);
	const [count1,
		dispatch1] = useReducer(reducer, initialState);

	return (<section class="container my-3 py-3 border">
    <h3 class="text-center border-bottom py-2">Hook</h3>
    <small class="lead text-muted">useReducer()</small>
    <hr />
    <LoadPost />
    <div class="border row">
    	<h5 class="col-12 my-2 border-bottom text-muted text-center">Complex Counter</h5>
    <div class="col-sm-6 col-md-4 justify-content-center input-group my-2">
    	<button class="btn btn-success" onClick={()=>dispatch('increment2x')} type="button">++</button>
    	<button class="btn btn-success" onClick={()=>dispatch('increment')} type="button">+</button>
    	<p class="input-group-text">
			{count}
	</p>
    	<button onClick={()=>dispatch('decrement')} class="btn btn-danger" type="button">-</button>
    	<button onClick={()=>dispatch('decrement2x')} class="btn btn-danger" type="button">--</button>
	</div>
    <div class="col-sm-6 col-md-4 justify-content-center input-group my-2">
    	<button class="btn btn-success" onClick={()=>dispatch1('increment2x')} type="button">++</button>
    	<button class="btn btn-success" onClick={()=>dispatch1('increment')} type="button">+</button>
    	<p class="input-group-text">
				{count1}
		</p>
    	<button onClick={()=>dispatch1('decrement')} class="btn btn-danger" type="button">-</button>
    	<button onClick={()=>dispatch1('decrement2x')} class="btn btn-danger" type="button">--</button>
	</div>
	</div>
	</section>
	)

}

export default UseReducer;