import {
	useRef,
	useState,
	useEffect
} from 'react';

export default function UseRef() {
	const [email,
		setEmail] = useState('');
	const [password,
		setPassword] = useState('');
	const [time,
		setTime] = useState(new Date().toLocaleTimeString())

	const formRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const timeInter = useRef(null)

	const checkValidity = (e)=> {
		e.preventDefault()
	}

	const showPassword = ()=> {
		passwordRef.current.type === 'password'?passwordRef.current.type = 'text': passwordRef.current.type = 'password'
	}

	useEffect(()=> {
		timeInter.current=setInterval(()=> {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		formRef.current[0].focus()
		
		return ()=> {
			clearInterval(timeInter.current)}
	}, [])

	return (<section class="container">
		<h3 class="text-center py-3 border-bottom">Hook</h3>
		<p class="text-muted lead">
useRef()
	</p>
		<hr />
		<form ref={formRef} onSubmit={checkValidity} class="card card-body">
			<div class="my-3">
				<label>Email : <span class="text-danger">*</span></label>
				<input ref={emailRef} type="email" onChange={(e)=> { setEmail(e.target.value)}} class="form-control" value={email} />
		</div>
			<div class="my-3 input-group">
				<label for="password">Password : <span class="text-danger">*</span></label>
				<div class="input-group">
					<input ref={passwordRef} type="password" onChange={(e)=> { setPassword(e.target.value)}} class="form-control" name="password" value={password} /><button onClick={showPassword} class="btn input-group-text"><i class="fa fa-eye"></i></button>
			</div>
		</div>
			<button class="btn btn-info" type="submit">Login</button>
	</form>
		<hr />
		<p class="text-muted text-center border-bottom py-1">
			Another use of useRef()
	</p>
		<h3 class="text-center">{time}</h3>
		<button onClick={()=> { clearInterval(timeInter.current)}} class="btn btn-danger">Stop time!</button>
	</section>
	)
}