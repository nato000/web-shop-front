import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './routes/root';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [activeTab, setActiveTab] = useState('/');

  console.log(activeTab);

  const handleTabClick = (tabIndex: string) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <BrowserRouter>
        <nav className='navigation'>
          <Link to='/sign-in' className='nav-btn'>
            /sign-in
          </Link>
          <Link to='/sign-up' className='nav-btn'>
            /sign-up
          </Link>
          <Link to='/' className='nav-btn' onClick={() => handleTabClick('/')}>
            /
          </Link>
          <Link to='/shop' className='nav-btn' onClick={() => handleTabClick('/shop')}>
            /shop
          </Link>
          <Link to='/shop/main' className='nav-btn' onClick={() => handleTabClick('/shop/main')}>
            shop/main
          </Link>
          <Link
            to='/shop/secondary'
            className='nav-btn'
            onClick={() => handleTabClick('/shop/secondary')}
          >
            shop/secondary
          </Link>
        </nav>
        <AppRouter />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
