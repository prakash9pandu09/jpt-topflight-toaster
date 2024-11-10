import { toast } from './features/components/ToastManager';
import './App.css'

function App() {
    const showNotification = () => {
        toast.show({
            message: 'This is Notification',
            type: 'error',
            duration: 3000
        });
    }
  return (
    <div className='app-container'>
        <button onClick={showNotification}>Top Right Toaster</button>
    </div>
  )
}

export default App
