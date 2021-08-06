import { useState, useEffect } from "react"
import "./Countdown.css"


export default function Countdown({ date }: { date: string }) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [timeUp, setTimeUp] = useState(false)

    function calcDifference() {
        let eventDate = +new Date(date);
        let difference = eventDate - +new Date();
        if (difference < 1) {
            setTimeUp(true)
        } else {
            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
            setMinutes(Math.floor((difference / (1000 * 60)) % 60))
            setSeconds(Math.floor((difference / (1000)) % 60))
        }
    }

    useEffect(() => {
        calcDifference()
        const interval = setInterval(() => {
            calcDifference()
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    if (timeUp) return null;
    return (
        <div>
            <h1>Viaje a las Catas</h1>
            <h2 className="title">Faltan</h2>
            <div className="row nes-container with-title is-rounded">
                <div className="item">
                    <h2>{days}</h2>
                    <h3>Días</h3>
                </div>
                <div className="item">
                    <h2>{hours > 9 ? hours : `0${hours}`}</h2>
                    <h3>Horas</h3>
                </div>
                <div className="item">
                    <h2>{minutes > 9 ? minutes : `0${minutes}`}</h2>
                    <h3>Minutos</h3>
                </div>
                <div className="item">
                    <h2>{seconds > 9 ? seconds : `0${seconds}`}</h2>
                    <h3>Segundos</h3>
                </div>
            </div>
            <div className="reservation">
                <a className="nes-btn" href="https://www.santarenahotel.com/reservation" target="_blank" rel="noopener noreferrer">
                    Reserva ya!
                </a>
            </div>

        </div>
    )
}
