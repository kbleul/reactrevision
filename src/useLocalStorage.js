
import {useEffect, useState} from 'react'

function getSavedInput(key, initialvalue) {

    const savedvalue = localStorage.getItem(key)

    if(savedvalue) return savedvalue
    
    if(initialvalue instanceof Function) return initialvalue()
    return initialvalue
    

}

export default function useLocalStorage(key , initialvalue) {
    
    const [savedvalue, set_savedvalue] = useState(() => {
        getSavedInput(key,initialvalue)
    })

    useEffect(()=> {
        localStorage.setItem(key , JSON.stringify(savedvalue))
    },[savedvalue])


    return [savedvalue , set_savedvalue]
}
