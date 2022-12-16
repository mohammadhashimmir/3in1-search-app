import axios from "axios";
import React, { useState, useEffect } from "react";

 
const Search=()=>{ 
    const [term, setTerm]=useState("");
    const [results,setResults]=useState([]);

       useEffect(()=>{
 const request=async()=>{
    const {data}=await axios.get("https://en.wikipedia.org/w/api.php",{
    params:{
      action:'query',
      list:'search',
      origin: '*',
      format:'json',
      srsearch: term,
    }
});
setResults(data.query.search);
 };

const timeOutID=setTimeout(()=>{
    if (term){
        request();
    };
},1000);
return ()=>{
 clearTimeout(timeOutID);
};

},[term]);

const renderedResults=results.map((result)=>{
    return (
        <div className="ui segment" key={result.pageid} style={{marginLeft:"10px", marginRight:"10px"}}>
            <div className="ui button right floated content">
                <a href={`https://en.wikipedia.org?curid= ${result.pageid}`}>
                <i className="wikipedia w icon" />
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
            </div>
        </div>
     )  
});
    return(
<div>
    <div className="ui form">
        <div className="Field">
        <label style={{marginLeft:"10px", fontSize:"15px"}}>Search Wikipedia</label>
        <div className="ui large input"
        style={{width:"300px", marginLeft:"10px"}}>
        <input type="text" 
        value={term}
        placeholder="Search"
        onChange={(e)=>{ setTerm(e.target.value)}}
        style={{borderRadius:"20px"}}/>
    </div> 
       </div>
    </div>
    <div className="ui celled list"> 
    {renderedResults}
    </div>
</div>
    );  
};
export default Search;