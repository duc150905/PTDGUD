import { useState, useRef } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    const intervalRef = useRef(null);
    const lapInputRef = useRef(null);

    const handleStartPause = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 10);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const handleAddLap = () => {
        const lapName = lapInputRef.current.value;

        setLaps((prev) => [
            ...prev,
            { name: lapName || `Lap ${prev.length + 1}`, time }
        ]);

        lapInputRef.current.value = "";
        lapInputRef.current.focus();
    };

    const formatTime = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milli = Math.floor((ms % 1000) / 10);

        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}.${milli.toString().padStart(2, "0")}`;
    };

    return (
        <div>
            <h2>Stopwatch</h2>

            <h1>{formatTime(time)}</h1>

            <button onClick={handleStartPause}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>

            <div>
                <input ref={lapInputRef} placeholder="Lap name" />
                <button onClick={handleAddLap}>Add Lap</button>
            </div>

            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>
                        {lap.name} – {formatTime(lap.time)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Stopwatch;
