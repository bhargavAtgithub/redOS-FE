import { createContext, useCallback, useEffect, useState } from 'react';
import Toast from './toast.component';
import { ToastsContainer } from './toast.styles';

const defaultState = {};

export const ToastContext = createContext(defaultState);

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        let toastsTimer;
        if (toasts.length) {
            toastsTimer = setTimeout(() => {
                setToasts((toasts) => toasts.slice(1));
            }, 2000);
        }
        return () => clearTimeout(toastsTimer);
    }, [toasts]);

    const addToast = useCallback(
        (toast) => {
            setToasts((toasts) => [...toasts, toast]);
        },
        [setToasts]
    );

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <ToastsContainer>
                {toasts.map((toast, index) => (
                    <Toast
                        message={toast.message}
                        icon={toast?.icon}
                        key={`toast-${index}`}
                    />
                ))}
            </ToastsContainer>
        </ToastContext.Provider>
    );
};

export default ToastProvider;
