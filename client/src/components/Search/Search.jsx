import React from "react";

const Search = ({searchVar,setSearchVar}) => {

    

    return(
        <>
            <div className="top">
                <label>Order by : </label>
                <select value={searchVar.option} onChange={(e) => setSearchVar({...searchVar , option : e.target.value})}>
                    <option>city</option>
                    <option>county</option>
                    <option>county_slug</option>
                    <option>slug</option>
                    <option>state</option>  
                    <option>state_full</option>
                    <option>state_slug</option>
                </select>
                <input placeholder="Search" type="text" value={searchVar.name} onChange={(e) => setSearchVar({...searchVar , name : e.target.value}) }/>
            </div>
        </>
    )
}

export default Search;