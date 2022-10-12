import { useContext } from 'react';
import { ToastContext } from './toast.context';

const useToast = () => {
    const toastContext = useContext(ToastContext);

    return toastContext;
};

export default useToast;
