import { useState,useEffect } from "react";

function DigitalClock(){

    const [time , setTime ] = useState(new Date())

    useEffect(()=>{
       const interval =  setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(interval);
    },[])

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{`${hours}:${minutes}:${seconds}`}</span>
                
            </div>
        </div>
    )

}        


export default DigitalClock;