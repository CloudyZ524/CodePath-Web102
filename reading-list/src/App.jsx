import './App.css'
import Header from './components/Header';
import List from './components/List';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
    <div className='container'>
      <div className='sidebar'>
        <Header />
        <NavBar />
      </div>
      <div className='main-content'>
        <List />
      </div>
    </div>
    </>
  )
}

export default App
