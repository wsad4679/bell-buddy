import {useEffect, useState} from "react";


const Clock = () => {


    const [time, setTime] = useState<string>("");
    const [showTimer, setShowTimer] = useState<boolean>(false);

    useEffect(() => {

        const updateTime =() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString();
            setTime(formattedTime);
        }

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return() => clearInterval(interval);

    }, [])


    return (
        <>
            {
                showTimer && <div>
                    Aktualny czas: {time}
                </div>
            }

            <button onClick={() => setShowTimer(true)}
                    style={{color:"beige", backgroundColor: "#123abc", margin:"10px",
                        padding:"20px"}}
            >Pokaż zegarek</button>
            <button onClick={() => setShowTimer(false)}
                    style={{color:"#123abc", backgroundColor: "beige", margin:"10px",
                        padding:"20px"}}
            >Schowaj zegarek</button>




        </>
    )




}
export default Clock