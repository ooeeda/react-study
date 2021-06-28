import React, {useState} from "react";
import {Button} from "@material-ui/core";
//6a26a9cb6a2ad32917b41bfa057bf667

function Menu2(){
     const [number, setNumber] = useState(0);


    const onIncrease = () => {
        setNumber(number => number + 1);
        //console.log(number);
        //setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(number => number - 1);
        // console.log(number);
        //setNumber(prevNumber => prevNumber -1 );
    }



    return(

        <section className="container">
            <div className="menu">
                <h1>menu2</h1>
                <h1>{number}</h1>
                <Button onClick={onIncrease}>+</Button>
                <Button onClick={onDecrease}>-</Button>
            </div>
        </section>

    );
}

export default Menu2;




/*
const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;
*/
