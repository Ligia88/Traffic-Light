import React from "react";
import '../../styles/home.css'
import Circle from "./Circle.jsx";
import { useState } from "react";



//create your first component
const Home = (props) => {

//Using UseState
const [colorRed, setColorRed] = useState('red');
const [colorYellow, setColorYellow] = useState('yellow');
const [colorGreen, setColorGreen] = useState('green');


const handleColorChangeRed = () => {
	
    if (colorRed === 'red' && colorYellow==='yellow' && colorGreen==='green') {
      setColorRed('red-on');
    } else {
      setColorRed('red');
    }
  };

  const handleColorChangeYellow = () => {
    if (colorYellow === 'yellow' && colorRed==='red' && colorGreen==='green') {
      setColorYellow('yellow-on');
    } else {
      setColorYellow('yellow');
    }
  };

  const handleColorChangeGreen = () => {
    if (colorGreen === 'green' && colorRed==='red' && colorYellow==='yellow') {
      setColorGreen('green-on');
    } else {
      setColorGreen('green');
    }
  };
  

	return (
		<div className="text-center">
			<div className="semaphore">
             <Circle identifier= '1' color={colorRed} action={handleColorChangeRed}/>
			 <Circle identifier='2' color= {colorYellow} action={handleColorChangeYellow}/>
			 <Circle identifier='3' color= {colorGreen} action={handleColorChangeGreen}/>
			</div>
		</div>
	);
};

//GreenItem.props.color = red;

export default Home;