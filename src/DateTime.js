import React  from "react";
import { useEffect} from "react";
import { useState } from "react";



const DateTime=() =>{

    const [time, setTime] = useState(new Date());

    useEffect(() => {
     const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
    },[]);

    return(
        <div className="DateTime">
        <div>
            <p className="bold">Time : {time.toLocaleTimeString()}</p>
        </div>

        <div>
           <p className="bold">Date : {time.toLocaleDateString()}</p>
        </div>
        </div>
    );
}

export default DateTime;