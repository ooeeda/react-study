import React, {useState} from "react";
import "../routes/menu.css";

function Menu1(){
    const [number, setNumber] = useState(0);
    return(
        <section className="container">
            <div className="menu">
                <h1>{number}</h1>
                <h1>Menu1</h1>
            </div>
        </section>
    );
}

export default Menu1;

