import React from "react";
import Link from "./Link";

const Header=()=>{
      return(     
<div className="ui three item menu">   
<Link href="/" className="item"> <i className="wikipedia w icon large"></i>Wikipedia Search</Link>
<Link href="/youtube" className="item" ><i className="youtube icon large"></i>YouTube search</Link>
<Link href="/unsplash" className="item" ><i className="image icon large"></i> Unsplash Search</Link>
</div>
    );
};
export default Header;