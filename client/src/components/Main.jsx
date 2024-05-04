import React, { useReducer, useState } from "react";
import Search from "./Search/Search";
import Display from "./Display/Display";

//creating an array to hold the objects that we get from the db
const cities = [{
    city : '',
    county : '',
    county_slug : '',
    slug : '', 
    state : '',
    state_full : '',
    state_slug : ''
}]

//reduce function to update the cities array
const reduce = (state , action) => {
    switch (action.type) {

        case 'populate' : {
                return {
                    cities : action.payload
                }
        } 

    }
}


const Main = () => {

    const [state , dispatch] = useReducer(reduce , cities);

    const [searchVar , setSearchVar] = useState({option : 'city' , name : ''});

    return( 
        <>
            {/* saving the information that i want to display in the table in a useState variable */}
            <Search searchVar={searchVar} setSearchVar={setSearchVar} />
            
            <Display searchVar={searchVar} state={state} dispatch={dispatch}/>
        </>    
    )
}

export default Main;