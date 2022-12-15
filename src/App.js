import React from "react";
import YouTube from "./Youtube Components/YouTube";
import UnsplashSearch from "./Unsplash Components/UnsplashSearch";
import Search from "./Wiki Components/Search";
import Route from "./Navigation Components/Route";
import Header from "./Navigation Components/Header";

const App=()=>{
    return (
        <div>
            <Header/>
            <Route path="/">
            <Search/>
            </Route>

            <Route path="/youtube">
           <YouTube/>
            </Route>

            <Route path="/unsplash">
            <UnsplashSearch/>
            </Route>
        </div>
    )
};

export default App;