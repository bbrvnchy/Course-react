import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// Массив данных(Для моего профиля)
let posts= [
    {message:'Hello world', likesCount:11},
    {message:'Hi, how are you?', likesCount:12}
]
//Массив диалогов
let dialogs = [
    { name: 'Misha', id: '1' },
    { name: 'Leo', id: '2' },
    { name: 'Lena', id: '3' },
    { name: 'Nastya', id: '4' }
]
//Массив сообщений
let messages = [
    { message: 'hello' },
    { message: 'How are you?' },
    { message: 'How are you?' },
]



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
