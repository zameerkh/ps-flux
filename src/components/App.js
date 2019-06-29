import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch, Redirect  } from "react-router-dom";


function App() {
 return (
   <div className="container-fluid"> 
   <Header></Header>
    <Switch>
    <Route path="/" exact component={HomePage}  ></Route>
    <Route path="/courses" component={CoursesPage}></Route>
    <Route path="/about" component={AboutPage}></Route>
    <Redirect from="/about-page" to="about"></Redirect>
    <Route  component={NotFoundPage}></Route>
    </Switch>

   </div>
 );
    

}

export default App;
