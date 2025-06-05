import {useEffect, useState} from "react";


const Clock = () =>
{


    const [time, setTime] = useState<string>("");


    useEffect(()=>{
        const updateTime = ()=>{
            const now = new Date();
            const formatted = now.toLocaleTimeString()
            setTime(formatted)

        }

       updateTime();

        const intervalId = setInterval(updateTime, 1000);

        return ()=> clearInterval(intervalId);
    }, [])


    return (
        <>
                <div style={{ fontSize: "2rem" , textAlign: "center" ,
                    marginTop: "2rem",  }} >
                    {time}
                </div>
        </>

    )

}

export default Clock