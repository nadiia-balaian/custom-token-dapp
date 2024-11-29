import { useAccount } from 'wagmi'
import './App.css'
import Header from './components/Header'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { TransferScreen } from './pages/TransferScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './pages/NotFound';

const PrivateWrapper = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <Header />
      <div className='max-w-[550px] m-auto p-5'>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<PrivateWrapper isAuthenticated={isConnected} />}>
              <Route path="/transfer" element={<TransferScreen />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
