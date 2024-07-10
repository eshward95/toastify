// ToastContext.tsx
import React, { createContext, useContext, useRef, useState } from "react";
import Toast from "../components/Toast";

interface ToastInterface {
  id: number;
  type: string;
  message: string;
  position: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

interface ToastContextType {
  showToast: (type: string, message?: string, position?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useToasts = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToasts must be used within a ToastProvider");
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastInterface[]>([]);
  const timerRef = useRef<number>();

  const showToast = (
    type: string,
    message: string = "Content",
    position = "top-right"
  ) => {
    const id = Math.floor(Math.random() * 10000);
    const newToast: ToastInterface = {
      id,
      type,
      message,
      position,
    };
    // setToasts((prev) => [...prev, newToast]);
    const copyToast = [...toasts, newToast];
    setToasts(copyToast);

    timerRef.current = setTimeout(() => {
      //   console.log(copyToast);
      closeToast(id);
    }, 2000);
  };

  const closeToast = (id: number) => {
    // console.log("Id", id);
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  const getPositions = (dir: string) => {
    if (dir === "top-left") {
      return { top: 0, left: 0 };
    } else if (dir === "top-right") {
      return { top: 0, right: 0 };
    } else if (dir === "bottom-left") {
      return { bottom: 0, left: 0 };
    } else if (dir === "bottom-right") {
      return { bottom: 10, right: 0 };
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map(
        (position) => (
          <div
            className="toast-container"
            style={{
              marginTop: "20px",
              position: "fixed",
              display: "flex",
              zIndex: "9999",
              flexDirection: "column",
              ...getPositions(position),
            }}
          >
            {toasts
              .filter((toast) => toast.position === position)
              .map((toast) => (
                <Toast
                  key={toast.id}
                  type={toast.type}
                  message={toast.message}
                  onClose={() => closeToast(toast.id)}
                />
              ))}
          </div>
        )
      )}
    </ToastContext.Provider>
  );
};
