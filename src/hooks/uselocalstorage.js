import { useState, useEffect } from "react";

export const useLocalStorage= (key, initial) => {
    const [value, setValue]= useState(()=> {
        const existing= localStorage.getItem(key);
        return existing? JSON.parse(existing) : initial;
    });
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    }, [key,value]);
    return [value,setValue];
}
