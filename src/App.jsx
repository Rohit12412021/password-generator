import { useCallback, useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
          const [numbersallowed,setnumbersalloweed]=useState(false);  
          const [charsallowed,setcharsallowed]=useState(false)  
          const [password,setpassword]=useState("")
          const [length, setLength] = useState(8); // default length is 8

          const passwordgenerator=useCallback(()=>{
            let pass="";
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   let numbers="0123456789"
   let specialsymbol="!@#$%^&*()_+-=[]{}|;:',.<>?/\~"
      if(numbersallowed){
        str+=numbers;
      }
      if(charsallowed){
        str+=specialsymbol;
      }
for(let i=1;i<=length;i++){
 let randomchar = Math.floor(Math.random() * str.length);
pass += str[randomchar];

}
setpassword(pass);
          },[charsallowed,numbersallowed,length]);

const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };
  return (
    <>
    <div className='outer-x'>
   <div className='box-x'>
    <div className='text-x'>
      <div className='text-y'>PASSWORD GENERTOR</div>
    </div>
    <div className='r-r'><input type='text' placeholder='PASSWORD' value={password} className='r-x' readOnly></input><button onClick={copyToClipboard} className='b-x'>Copy</button></div>
      <div className='l-x'>
       <div >
            
            <input
              type="range"
              id="length"
              min="1"
              max="100"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
         <input
  type="checkbox"
  id="checkbox-1"
  onChange={() => setcharsallowed((prev) => !prev)}
/>
<label htmlFor="checkbox-1">Special Characters</label>
<input type='checkbox' id='checkbox-2' onChange={()=>setnumbersalloweed((prev)=>!prev)}></input>
<label htmlFor='checkbox-2'>Numbers</label>
</div>
<div className='e-e'>
<button className='get-x' onClick={passwordgenerator}>GET PASSWORD</button>
</div>

    </div>
    
   </div>

    </>
  )
}

export default App
