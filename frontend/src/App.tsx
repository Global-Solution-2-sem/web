import Application from "./components/Application";
import Header from "./components/Header";
import Images from "./components/Images";
import './styles/main.scss'

export default function App() {

  return (
    <>
      <Header />
      <main>
        <Images />
        <Application />
      </main>
    </>
  )
}

