import {useEffect, useState} from "react";
import CountDownTimer from "./CountDownTimer.tsx";


const Clock = () => {


    const [time, setTime] = useState<string>("");
    const [showTimer, setShowTimer] = useState<boolean>(false);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [selectedZone, setSelectedZone] = useState<string>("Europe/Warsaw");

    const timeZones = [
        "Europe/Warsaw",
        "UTC",
        "America/New_York",
        "Asia/Tokyo",
        "Australia/Sydney"
    ];

    useEffect(() => {

        const updateTime =() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString("pl-PL",{timeZone: selectedZone});
            setTime(formattedTime);
        }

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return() => clearInterval(interval);

    }, [selectedZone]);


    return (
        <>
            {
                showTimer && <div>
                    Aktualny czas: {time}

                    <label> Wybierz strefę czasową: </label>


                    <select
                        value={selectedZone}
                        onChange={(e) => setSelectedZone(e.target.value)}
                        style={{ margin: "10px", padding: "5px" }}
                    >
                        {timeZones.map((zone) => (
                            <option key={zone} value={zone}>
                                {zone}
                            </option>
                        ))}
                    </select>
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



            {
                showCountDown && <CountDownTimer/>
            }

            <button onClick={() => setShowCountDown(true)}
                    style={{color:"beige", backgroundColor: "#123abc", margin:"10px",
                        padding:"20px"}}
            >Pokaż Licznik</button>
            <button onClick={() => setShowCountDown(false)}
                    style={{color:"#123abc", backgroundColor: "beige", margin:"10px",
                        padding:"20px"}}
            >Schowaj Licznik</button>


        </>
    )




}
export default Clock