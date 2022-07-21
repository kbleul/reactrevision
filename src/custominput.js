import React, { useImperativeHandle } from 'react'

 function Custominput({},ref) {

    useImperativeHandle(ref, () => {
        return { alerthi : () => alert("hii")}
    }, [])

  return (
    <input  value="" type="text" readOnly/>
  )
}

export default  React.forwardRef(Custominput)
