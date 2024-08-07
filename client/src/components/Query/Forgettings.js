import React from "react"
import { useEffect,useState } from "react"
import { useQueryContext } from "./QueryContext"


export default function Forgettings(props) {
    const [words,setWords]=useState([]);
    const [freq,setFreq]=useState(-1);
    const { forgetting, setQuery} = useQueryContext();
    useEffect(()=>{
        const run =async ()=>{
        if(freq!=-1){
            const newWords=await forgetting(freq)
            console.log(newWords);
            setWords(newWords)
        }}
        run();
    },[freq])

   return (
    <div>    
       
    <input onChange={event=>setFreq(parseInt(event.target.value))}></input>
    {words.map((word,index)=>(<h1 key={index} onClick={event=>setQuery(word)}>{word}</h1>))}
    </div>
   )

}