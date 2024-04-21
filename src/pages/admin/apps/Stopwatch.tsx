import React, { useState, useEffect } from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'


const startTimer = (TimeInSecond: number) => {
    const Hour = Math.floor(TimeInSecond / 3600)
    const Minute = Math.floor((TimeInSecond % 3600) / 60)
    const Second = Math.floor(TimeInSecond % 60)
    console.log("Hour", Hour)
    console.log("Minute", Minute)
    console.log("Second", Second)
    const HourString = Hour.toString().padStart(2, "0")
    const MinuteString = Minute.toString().padStart(2, "0")
    const SecondString = Second.toString().padStart(2, "0")
    return `${HourString} : ${MinuteString} : ${SecondString}`
}

const Stopwatch: React.FC = () => {
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [time, setTime] = useState<number>(0)

    useEffect(() => {
        let TimerId:any;
        if(isRunning){
            
            TimerId=setInterval(()=>{
                setTime(prev=>prev+1)
            },1000)
        }

        return ()=>{
            clearTimeout(TimerId)
        }
    }, [isRunning])

    const resetHandler = () => {
        setTime(0)
        setIsRunning(false)
    }
    return (
        <div className='adminContainer'>
            <AdminSidebar />

            <main className="dashboard-app-container">
                <h1>Stopwatch</h1>
                <section>
                    <div className="stopwatch">
                        <h2>{startTimer(time)}</h2>
                        <button onClick={() => setIsRunning((prev) => !prev)}>
                            {isRunning ? "Stop" : "Start"}
                        </button>
                        <button onClick={resetHandler}>Reset</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Stopwatch