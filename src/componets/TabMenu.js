import React from "react";
import {Link} from "react-router-dom";
import "./TabMenu.css"

function TabMenu(){

    return(
        <div className="nav">
            <Link to="/menu1">Menu1</Link>
            <Link to="/menu2">Menu2</Link>
            <Link to="/menu3">예방접종센터</Link>
        </div>
    );
}
export default TabMenu;
