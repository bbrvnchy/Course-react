import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Message from './Components/Message/Message';
import Nav from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className='container'>
                    <Header />
                    <div className='style-grid'>
                        <Nav />
                        <main className='wrapper-content'>
                            <Route component={Profile} />
                            <Route component={Message} />
                            {/* <Profile/> */}
                            {/* <Message />  */}
                        </main>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
