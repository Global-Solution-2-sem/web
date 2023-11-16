import Application from "./Application";
import Benefits from "./Benefits";
import Images from "./Images";
import '../styles/main.scss';

export default function Home() {
    return (
        <main>
            <Images />
            <Application />
            <Benefits />
        </main>
    )
}