import './App.css';
import Header from './Components/Header/Header';
import Message from './Components/Message/Message';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import { Routes, Route, Link } from 'react-router-dom';
import News from './Components/News/News';
import Groups from './Components/Groups/Groups';
import Friends from './Components/Friends/Friends';
import Audios from './Components/Audios/Audios';
import Settings from './Components/Settings/Settings';


const App = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <div className='style-grid'>
                    <Nav />
                    <main className='wrapper-content'>
                        <Routes>
                            <Route path='/profile' element={<Profile posts={}/>} />
                            <Route path='/news' element={<News />} />
                            <Route path='/message' element={<Message />} />
                            <Route path='/friends' element={<Friends />} />
                            <Route path='/groups' element={<Groups />} />
                            <Route path='/audios' element={<Audios />} />
                            <Route path='/settings' element={<Settings />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
