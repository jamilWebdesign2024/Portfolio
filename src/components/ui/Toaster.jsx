// Toaster.jsx
import React, { useState } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import Toast from './Toast';

const Toaster = () => {
  const [open, setOpen] = useState(false);

  // For demo: trigger on button click
  const showToast = () => setOpen(true);

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <button onClick={showToast} className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Show Toast
      </button>

      <Toast
        open={open}
        onOpenChange={setOpen}
        title="Action Successful"
        description="Your changes have been saved."
      />

      <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-50" />
    </ToastPrimitive.Provider>
  );
};

export default Toaster;
