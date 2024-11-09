import { useEffect } from "react";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "react-feather";

export enum NotificationType {
    "info",
    "success",
    "warning",
    "error"
}

export const icons = {
    info: <Info />,
    success: <CheckCircle />,
    warning: <AlertCircle />,
    error: <XCircle />
}
type Props = {
    onClose: () => void;
    type: keyof typeof NotificationType;
    message: string;
}

const ToastNotification = ({onClose, type, message}: Props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
  return (
    <div className={`toaster-container ${type}`}>
      <div className="toaster-type-content">
        {icons[type]}
        <div>{message}</div>
      </div>

      <div className="toaster-close">
        <X size={16} onClick={onClose} />
      </div>
    </div>
  );
}

export default ToastNotification