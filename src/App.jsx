import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer';

function App() {
    return <main style={{ width:"100%", height:"100%"}}>
        <Navbar />
        <ItemListContainer  />
    </main>;
}

export default App
