import {useEffect, useRef, useState} from "react";

const CountDownTimer = () => {
    const time = 60 * 45;
    const [timeLeft, setTimeLeft] = useState(time);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if(isRunning && timeLeft > 0){
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current)}
    }, [isRunning]);

    useEffect(() => {
        if (timeLeft === 0 && intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    }, [timeLeft]);

    const handleStart = () => {
        if (!isRunning && timeLeft > 0) setIsRunning(true);
    };

    const handleStop = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const handleReset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeLeft(time);
        setIsRunning(false);
    };



    return (
        <>
            <h2>Pozostało: {Math.floor(timeLeft/60)} : {timeLeft%60}</h2>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
)

}

export default CountDownTimer;