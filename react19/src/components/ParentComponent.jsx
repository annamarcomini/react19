import {useRef, useEffect} from "react"
import InputField from "./InputField";

const ParentComponent = () => {
 const inputRef = useRef(null);
 
 useEffect(() => {
  
  if (inputRef.current) {
   inputRef.current.focus(); //focusing straight to this input when pages reload
  }
   
 },[])
  
 return (
  <div>
   <InputField ref={inputRef} placeholder="Type something here..."/>
  </div>
 )
};

export default ParentComponent;