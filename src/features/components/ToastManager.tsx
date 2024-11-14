import ReactDOM from "react-dom";
import { Guid } from "guid-typescript";
import ToastNotification, { NotificationProps, NotificationType } from "../ToastNotification";

export enum NotificationPosition {
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left'
}
interface ToastOptions {
    id?: Guid;
    type: keyof typeof NotificationType;
    message: string;
    duration?: number;
    notificationPosition?: keyof typeof NotificationPosition;
  }

export class NotificationManager {
    private containerRef: HTMLDivElement;
    private notifications: NotificationProps[] = [];

    constructor(){
        const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
        const notificationContainer = document.createElement("div") as HTMLDivElement;
        notificationContainer.className = "toast-container-main";
        body.insertAdjacentElement("beforeend", notificationContainer);
        this.containerRef = notificationContainer;
    }

    public show(options: ToastOptions): void {
        const notificationId: Guid = Guid.create();
        const toast: NotificationProps = {
            id: notificationId,
            ...options,
            onClose: () => this.close(options.id ?? notificationId)
        }
        this.notifications = [toast, ...this.notifications];
        this.containerRef.id = options.notificationPosition!;

        this.render();
    }

    public close(id: Guid){
        this.notifications = this.notifications.filter((toastProps: NotificationProps) => toastProps.id != id);
        this.render();
    }

    private render(): void {
      const toastsList = this.notifications.map(
        (toastProps: NotificationProps) => (
          <ToastNotification key={toastProps.id?.toString()} {...toastProps} />
        )
      );
      ReactDOM.render(toastsList, this.containerRef);
    }
}

export const toast = new NotificationManager();