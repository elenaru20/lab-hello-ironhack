import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import icon1 from '../public/images/icon1.png'
// import {ReactComponent as Logo} from '../public/images/ironhack-logo.svg'



const element = (
    <div>
        
        {/* <div>
            <Logo />
        </div> */}
        <h1>Say hello to <br></br> ReactJS </h1>
        <article>You will learn how to use <br></br>the most popular frontend library, <br></br>and become a super Ninja developer</article>
        <a href="#">Awesome!</a>
        <img src={icon1} alt="icon1"/>
    </div>
)



ReactDOM.render(
    element,
    document.getElementById('root')
);