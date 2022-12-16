import React,{useState}from "react";

const SearchBar=({onSubmit})=>{
const [term,setTerm]=useState("");

return(
  <form 
  onSubmit={(event)=>{event.preventDefault();onSubmit(term)}} 
  className="ui form">
  <div className="field">
     <label style={{marginLeft:"20px", fontSize:"15px"}}>Search Unsplash</label>
        <div className="ui large icon input"  style={{width:"300px", marginBottom:"20px", marginLeft:"10px"}}>
        <input type="text" 
        value={term}
        placeholder="Search high-resolution photos"
        onChange={(e)=>{ setTerm(e.target.value)}}
        style={{borderRadius:"20px"}}/>
        <i className="inverted circular search link icon" onClick={()=>{onSubmit(term)}}></i>
    </div> 
        </div>
        </form>
);
    };

export default SearchBar;