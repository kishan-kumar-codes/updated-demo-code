// components/Toast.tsx
import { useEffect } from 'react';
import classNames from 'classnames';

type ToastProps = {
  message: string;
  type: 'success' | 'error' | 'warning';
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const toastStyles = classNames(
    'fixed bottom-4 left-4 p-4 rounded shadow-lg text-white',
    {
      'bg-limeGreen': type === 'success',
      'bg-red': type === 'error',
      'bg-warning': type === 'warning',
    }
  );  

  return (
    <div className={toastStyles}>
      {message}
      <button onClick={onClose} className="ml-4 text-black">
        ✖
      </button>
    </div>
  );
};

export default Toast;
