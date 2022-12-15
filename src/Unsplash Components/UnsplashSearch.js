import React,{useState} from "react";
import Unsplash from "../APIs/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"
   
const UnsplashSearch=()=>{
const [images, setImages]=useState([]);

const onSearchSubmit=async(term)=>{
    const myQuery=await Unsplash.get ("/search/photos", {
    params:{query:term},   
})
setImages(myQuery.data.results);
}
return(
<div>{<SearchBar onSubmit={onSearchSubmit}/>}
        <ImageList images={images}/>
        </div>
);
};
   
export default UnsplashSearch;