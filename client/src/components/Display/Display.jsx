import {useEffect} from "react";
import axios from "axios";

const Display = ({searchVar , state , dispatch}) => {

    useEffect(() => { 

        axios.get('http://localhost:8000/api/cities')
            .then(response =>{

                const citiesData = response.data;   
                const uniqueCities = [];
                const cityMap = [];

                //using another array to keep track and then pushing the elements with unique county in uniqueCities array
                for (const cityObj of citiesData) {
                    if (!cityMap.includes(cityObj.county)) {
                    cityMap.push(cityObj.county);
                    uniqueCities.push(cityObj);
                    }
                }

                //updating the cities array
                dispatch({
                    type : 'populate',
                    payload : uniqueCities
                })   
            })
            .catch (err => console.log(err))
},[]) 



    return(
        <>
            <table>
                <thead>
                    <tr style={{fontSize : '1.3em'}}>
                        <td>City</td>
                        <td>County</td>
                        <td>County_Slug</td>
                        <td>Slug</td>
                        <td>State</td>
                        <td>State_Full</td>
                        <td>State_Slug</td>
                    </tr>
                </thead>

                {/*using conditional rendering to render the code that matches searchVar.option. Using filter to filter the array to only with words that include the searchVar.name and returning the full city object when there is no input from the user. we then sort it alphabetically and map through the filtered array*/}
                <tbody>
                    {  
                    state.cities ?
                    searchVar.option === 'city' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.city.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.city.localeCompare(b.city)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug
                        }</td>
                    </tr>
                    )
                    : searchVar.option === 'county' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.county.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.county.localeCompare(b.county)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : searchVar.option === 'county_slug' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.county_slug.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.county_slug.localeCompare(b.county_slug)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : searchVar.option === 'slug' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.slug.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.slug.localeCompare(b.slug)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : searchVar.option === 'state' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.state.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.state.localeCompare(b.state)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : searchVar.option === 'state_full' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.state_full.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.state_full.localeCompare(b.state_full)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : searchVar.option === 'state_slug' ?    
                    state.cities.filter( (city) =>
                        searchVar.name == '' 
                        ? city
                        : city.state_slug.toLowerCase().includes(searchVar.name.toLowerCase())
                    ).sort((a,b) => a.state_slug.localeCompare(b.state_slug)).map((city,index) => 
                    <tr key={city._id}>
                        <td>{city.city}</td>
                        <td>{city.county}</td>
                        <td>{city.county_slug}</td>
                        <td>{city.slug}</td>
                        <td>{city.state}</td>
                        <td>{city.state_full}</td>
                        <td>{city.state_slug}</td>
                    </tr>
                    ) 
                    : ''

                    : ''
                    } 
                    
                </tbody>
            </table>
        </>
    )
}

export default Display;