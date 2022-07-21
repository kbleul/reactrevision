import React, {useImperativeHandle, useRef} from 'react'

 const Modulebox = ({},ref) => {

    const boxone = useRef()
    const boxtwo = useRef()
    const boxthree = useRef()
    const boxfour = useRef()


   useImperativeHandle(ref,() => {
       return {
            boxone_text : () => boxone.current.innerHTML = boxone.current.innerHTML ==="text one" ? "text 1" : "text one",
            boxtwo_text : () => boxtwo.current.innerHTML = boxtwo.current.innerHTML ==="text two" ? "text 2" : "text two",
            boxthree_text : () => boxthree.current.innerHTML = boxthree.current.innerHTML ==="text three" ? "text 3" : "text three",
            boxfour_text : () => boxfour.current.innerHTML = boxfour.current.innerHTML ==="text four" ? "text 4" : "text four",
       }
   })
  return (
    <div ref={ref}>
        <p ref={boxone}>Box one</p>
        <p ref={boxtwo}>Box two</p>
        <p ref={boxthree}>Box thre</p>
        <p ref={boxfour}>Box four</p>
    </div>
  )
}

export default React.forwardRef(Modulebox)


