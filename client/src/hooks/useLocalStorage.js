import {useState} from "react";

const useLocalStorage = (key, plantData) => {
    const [value, setValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }else {
            window.localStorage.setItem(key, JSON.stringify(plantData));
            return plantData;
        }
    });

    const setPlant = plant => {
        setValue(plant);
        window.localStorage.setItem(key, JSON.stringify(plant));
    };

    return [value, setPlant]
}

export default useLocalStorage;