//custom hook
import { useState } from "react"

const useInputState = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);

    const OnChange = e =>{
        setValue(e.target.value);
    }
    
    // const handleChange = e =>{
    //     setValue(e.target.value);
    // }
    // return [value, handleChange];

    return {
        value,
        OnChange
    }
}
export default useInputState