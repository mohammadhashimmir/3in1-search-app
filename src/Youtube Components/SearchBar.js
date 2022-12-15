import React, {useState} from "react";

const SearchBar=({termSubmitted})=>{
const [term, setTerm]=useState("");

    const inputChange=(event)=>{
    setTerm(event.target.value);
    }; 

    const formSubmit=(event)=>{
    event.preventDefault();
    
    termSubmitted(term);
    };
    return (
        <div className="search-bar ui segment" style={{ marginTop:"10px",padding:"15px", borderRadius:"20px"}}>
            <form onSubmit={formSubmit} className="ui form">
            <div className="field">
            <label style={{marginTop:"-9px", fontSize:"15px",marginLeft:"5px"}}>Video Search</label>
             <input type="text" 
             value={term}
             onChange={inputChange}/>
            </div>
            </form>
        </div>
        );
    
};
export default SearchBar;
