import { Guid } from "guid-typescript";
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
export type NotificationProps = {
    id?: Guid;
    onClose: () => void;
    type: keyof typeof NotificationType;
    message: string;
    duration?: number;
}

const ToastNotification = ({onClose, type, message, duration = 3000}: NotificationProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
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