import React, { useImperativeHandle } from 'react'
import useLocalStorage from "./useLocalStorage"

 function Custominput({},ref) {

  const [input , setinput ] = useLocalStorage("myinput",()=> "")

    useImperativeHandle(ref, () => {
        return { alerthi : () => alert("hii")}
    }, [])

  return (
    <input  value={input} type="text" onChange={e => setinput(e.target.value)}/>
  )
}

export default  React.forwardRef(Custominput)
