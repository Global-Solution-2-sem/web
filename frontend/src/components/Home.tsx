import Application from "./Application";
import Benefits from "./Benefits";
import Images from "./Images";
import '../styles/main.scss';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate('/')
        }
    }, [])
    return (
        <main>
            <Images />
            <Application />
            <Benefits />
        </main>
    )
}