import React, {useState} from 'react'

const InputField = () => {
    const [color, setColor] = useState(true)
    return (
        <div dir='ltr' className='fieldMargin '>
            <h2 className="text">Title</h2>
  <input type="text" className='inputField' placeholder="First Name" required/>


        </div>
    )
}

export default InputField
