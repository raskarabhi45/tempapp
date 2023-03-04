import React ,{useState,useEffect} from "react";
import "./css/style.css";


const Tempapp=()=>{

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Pune");

    useEffect(()=>{

        const fetchApi= async()=>{
         //  const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d9faabc01e1199173c37fe40c0202264`
            //const url=`http://api.openweathermap.org/data/2.5/weather?abhi=${search}&appid=012e21799d4169515bdda96f3f70a5d2`;b14425a6554d189a2d7dc18a8e7d7263
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d9faabc01e1199173c37fe40c0202264 `
            //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            const response=await fetch(url);
            
            const resJson=await response.json();
            setCity(resJson.main);
        }


     fetchApi();
    },[search]);

    return(
        <>
            <div className="box">
            <div className="inputData">
                <input type="search"
                value={search}
                className="inputField"
                onChange={(event)=>{
                    setSearch(event.target.value)
                }} 

                />
            </div>

            {
                !city?(
                    <p className="errorMsg">No Data Found</p>
                ):  (
                    <>
                    <div class="info">
            <h2 className="location">
            <i class="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </>

                )
            }


            </div>
        </>
    )
}

export default Tempapp;