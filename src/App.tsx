import { useState } from 'react'
import './App.css'
import ToastNotification from './features/ToastNotification';

function App() {
    const [showToast, setShowToast] = useState(false);

    const onToastClose = () => {
        setShowToast(false);
    }
  return (
    <div className='app-container'>
        <button onClick={() => setShowToast(!showToast)}>Top Right Toaster</button>
        {showToast && <ToastNotification onClose={onToastClose} />}
    </div>
  )
}

export default App
