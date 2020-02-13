
import React,{useState,useEffect} from 'react';

function Header (){
    const[count,setHeader]=useState('Home');

    //  useEffect(() => {
    //  alert(`You clicked ${count} times`);
    // });
return(
    <div>
<header>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"  alt="Problem?"/>
                <p onClick={() => setHeader('Home')}>Home</p>
                <p onClick={() => setHeader('About')}>About</p>
                <p onClick={() => setHeader('Contact')}>Contact</p>
                </header>
    </div>
)
}


export default Header