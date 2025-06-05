import {useEffect, useState} from "react";
import CountDownTimer from "./CountDownTimer.tsx";


const Clock = () => {


    const [time, setTime] = useState<string>("");
    const [showTimer, setShowTimer] = useState<boolean>(false);
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
                    Aktualny czas: {time} <br/>

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

            <button onClick={() => setShowTimer(true)}>Pokaż zegarek</button>
            <button onClick={() => setShowTimer(false)}>Schowaj zegarek</button>






        </>
    )




}
export default Clock