import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityCoords } from "./cityApi";

export const CityView = () => {
    const cityCoords = useSelector(state => state.coords)
    const dispatch = useDispatch();
    console.log(cityCoords)
    useEffect(() => {
        dispatch(fetchCityCoords())
    }, [])
    return (
        <div>
            <h2>Weather in cities</h2>
            {/*{ weather.loading && <div>Loading...</div> }*/}
            {/*{ !weather.loading && weather.error ? <div>Error: { weather.error }</div> : null }*/}
            {/*{ !weather.loading && weather ? (*/}
            <div>
                <h1> тут будет cityData </h1>
            </div>
            {/*) */}
            {/*: null*/}
            {/*}*/}
        </div>
    )
}
