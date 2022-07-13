

import React, {useEffect, useState , useRef} from 'react'

 const Refs = () => {
    const [name , setName] = useState("")
    const [nametwo , setNametwo] = useState("")
    const rendercount = useRef(1)
    const rendercount_one = useRef(0)
    const rendercount_two = useRef(0)
    const prevname = useRef('')



    useEffect(() => {
        console.log("refs rendered")
        rendercount.current = rendercount.current + 1
    })

    useEffect(() => {
        console.log("refs rendered 2")
        rendercount_one.current = rendercount_one.current + 1
        prevname.current = name
    }, [name])


  
    useEffect(() => {
        console.log("refs rendered 2")
        rendercount_two.current = rendercount_two.current + 1
    }, [nametwo])
    
    
  return (<div>
    <input value={name} onChange={e => setName(e.target.value)} />
    <input value={nametwo} onChange={e => setNametwo(e.target.value)} />

    <p>Rendered {rendercount.current} times</p>
    <p>Rendered by one {rendercount_one.current} times</p>
    <p>Rendered by two{rendercount_two.current} times</p>
    <p>My name is {name} it used to be {prevname.current}</p>

    </div>
  )
}


export default Refs