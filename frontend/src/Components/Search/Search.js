import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'

import './weather.css'

const BASE_URL = `http://localhost:5000/api/`
const Search = () => {
    const [data, setData] = useState({})
    const [place, setPlace] = useState("")
    // const [type,setType] =useState("")
    const [placesearch, setplacesearch] = useState("")
    const [type1, setType1] = useState("");

    // console.log('rrr');
    // console.log(type);
    console.log(data.location);

    // const currentArray = Object.entries(data).map(function (key) {
    //     return <h3 value={key}>{data[key]}</h3>
    // });
    // const currentArray=[1,2,3]
    // const entries = Object.entries(data);
    // var convert = Object.keys(data).map(function (key) {
    //     return {(key), data[key]};
    // });
    // const convert=data.toArray()
    // console.log(convert);

    // console.log(convert);  

    // console.log(entries);

    const options = [
        { value: '', text: 'select' },
        { value: 'current', text: 'current' },
        { value: 'forecast', text: 'forecast' },

    ];

    const [type, setType] = useState(options[0].value);

    const handleChange = event => {
        console.log(event.target.value);
        setType(event.target.value);
    };

    console.log('$$$');
    console.log(type);




    const handleclick = () => {


        setplacesearch(place)
        setType1(type)
        // console.log('butt');
        // console.log(placesearch);
    }
    console.log('pppp');
    // console.log(type1);
    console.log(data.name);

    useEffect(() => {
        if (type1.length) {
            axios.post(`${BASE_URL}weather`, {
                url: `http://api.weatherapi.com/v1/${type1}.json?key=5dabaeb9baf2492db21124518221409&q=${placesearch}&aqi=no`,
                key: "5dabaeb9baf2492db21124518221409",
                params: type1,
                place: placesearch
            })
                .then((res) => console.log(res))

        }
    }, [placesearch, type1])
    useEffect(() => {
        if (type1.length) {
            axios.get(`http://api.weatherapi.com/v1/${type1}.json?key=5dabaeb9baf2492db21124518221409&q=${placesearch}&aqi=no`).then((res) => {
                if (type1 === "forecast") {
                    console.log(res.data.forecast.forecastday[0].astro, "data");
                    setData(res.data.forecast.forecastday[0].astro)
                } else {
                    console.log(res.data.location, "data");
                    setData(res.data.location)
                }
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [placesearch, type1])

    console.log(place);
    return (
        <>
            {/* <input type="text" value={place} onChange={(e) => { setPlace(e.target.value) }}></input> */}

            {/* <button type='button' onClick={handleclick}>click</button> */}
            {/* <select onChange={(e) => setType(e.target.value)} >
                <option>current</option>
                <option >forecast</option>
            </select> */}

            {/* <div>
                <select value={type} onChange={handleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div> */}

            {/* <div style={{ background: "red" }}>
                {
                    type1 === "forecast" ? (
                        <h2>{data.sunrise}</h2>
                    ) : (
                        <h2>{data.name}</h2>
                    )


                }
            </div> */}
            <div className='center-div'>
                <Card className="text-center weather-card">
                    <div class='bgimag'>
                        <Card.Body>
                            <div className='in'>
                                <input type="text" value={place} onChange={(e) => { setPlace(e.target.value) }} placeholder="Search location..." />
                            </div>

                            <div className='sel'>
                                <select value={type} onChange={handleChange}>

                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}

                                </select>
                            </div>

                            <div className='but'>
                                <button className='button n-button'  onClick={handleclick}>Check</button>
                            </div>
                            <div>
                                {
                                    type1 === "forecast" ? (
                                        <h6 style={{ fontFamily: 'monospace' }} className='mt-5'>sunrise:{data.sunrise}<br /><br />

                                            sunset:{data.sunset}<br /><br />
                                            moonrise:{data.moonrise} <br /><br />
                                            moon_phase:{data.moon_phase} <br /><br />
                                            moon_illumination:{data.moon_illumination}
                                        </h6>
                                    ) : (
                                        <h6 style={{ fontFamily: 'monospace' }} className='mt-5'>{data.name}{data.country}<br /><br />
                                            {data.lat}  {data.lon} <br /><br />
                                            {data.tz_id} <br /><br />
                                            {data.localtime}
                                        </h6>

                                    )


                                }
                            </div>


                        </Card.Body>

                    </div>

                </Card>
            </div>
        </>
    )
}

export default Search
