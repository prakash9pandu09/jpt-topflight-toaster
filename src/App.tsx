import { NotificationPosition, toast } from './features/components/ToastManager';
import './App.css'

function App() {
    const showNotification = (position: keyof typeof NotificationPosition) => {
        toast.show({
            message: 'This is Notification',
            type: 'success',
            duration: 5000,
            notificationPosition: position,
        });
    }
  return (
    <div className='app-container'>
        <button onClick={() => showNotification('top-right')}>Top Right</button>
        {/*<button onClick={() => showNotification('bottom-right')}>Bottom Right</button>
        <button onClick={() => showNotification('top-left')}>Top Left</button>
        <button onClick={() => showNotification('bottom-left')}>Bottom Left</button>*/}
    </div>
  )
}

export default App
