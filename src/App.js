import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import TabMenu from "./componets/TabMenu";
import Menu1 from "./routes/Menu1";
import Menu2 from "./routes/Menu2";
import Menu3 from "./routes/Menu3";


function App(){
    return (
        <HashRouter>
            <TabMenu/>
            <Route path="/menu1" exact={true} component={Menu1}/>
            <Route path="/menu2" component={Menu2}/>
            <Route path="/menu3" component={Menu3}/>
        </HashRouter>
    );
}

export default App;
