import { Check, X } from "react-feather";

type Props = {
    onClose: () => void;
}

const ToastNotification = ({onClose}: Props) => {
  return (
    <div className="toaster-container">
      <div className="toaster-type-content">
        <Check color="green" size={16} style={{ textAlign: "left" }} />
        <div>Notification Content</div>
      </div>

      <div className="toaster-close">
        <X size={16} onClick={onClose} />
      </div>
    </div>
  );
}

export default ToastNotification