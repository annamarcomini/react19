import {useRef, useEffect} from "react"
import InputField from "./InputField";

const ParentComponent = () => {
 const inputRef = useRef(null);
 
 useEffect(() => {
  
  if (inputRef.current) {
   inputRef.current.focus();
  }
   
 },[])
  
 return (
  <div>
   <InputField ref={inputRef} placeholder="Type something here..."/>
  </div>
 )
};

export default ParentComponent;