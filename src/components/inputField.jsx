import { Button } from "./button";
import { useStore } from "../store/store";
import { useDebounce } from "../helpers/useDebounce.js";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

export function InputField() {

    const { movieName, movieID, setMovieName, setMovieID, isName, setIsName } = useStore();

    const [ inputValue, setInputValue ] = useState(isName ? movieName : movieID);

    const debouncedChangerHandler = useCallback(
        useDebounce((value) => {
            if(isName) {
                setMovieName(value);
            } else {
                setMovieID(value);
            }
        }, 800),
        [isName]
    )

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        debouncedChangerHandler(value);
    };

    useEffect(() => {
        setInputValue(isName ? movieName : movieID);
    },[isName, movieName, movieID])
    return (
        <>
        <input 
        type="text" 
        placeholder={ isName ? "Enter Movie Name" : "Enter IMDB ID"}
        onChange={handleInputChange}
        value={inputValue}
        className="border p-2 rounded-md w-full"
         />
        {
            isName ? 
            <Button text={'By IMDB ID'} hanlder={() => setIsName(false)} /> : 
            <Button text={'By Name'} hanlder={() => setIsName(true)}/>
        }
        </>
    )
}