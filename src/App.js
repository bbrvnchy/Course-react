import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Profile from './Components/Profile';

const App = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header/>
                <div className='style-grid'>
                <Nav/>
                <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
