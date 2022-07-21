import React, {useEffect} from 'react'

export default function useConsoleler (value) {

    useEffect(() => {
        console.log(value)
    },[value])

}
