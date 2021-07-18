import {useEffect,useState} from 'react';


export default function useWindowidth(reqSize) {
	const [isSmallScreen,setisSmallScreen] = useState(false);
	
	useEffect(()=>{
		const checkScreen = () => {
			setisSmallScreen(window.innerWidth<reqSize);
		};
		checkScreen();
		
		window.addEventListener('resize',checkScreen);
		
		return () => {window.removeEventListener('resize',checkScreen)};
	},[reqSize]);
	
	return isSmallScreen?'small':'large';
}