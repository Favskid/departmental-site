import { useState } from 'react';

const MarqueeBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-blue-600 text-white text-sm font-medium py-2 px-4 w-full overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-2 text-white text-lg"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Scrolling text */}
      <div className="whitespace-nowrap animate-marquee">
        🚨 Attention! Admissions for 2025 are now open. Visit the portal to apply. | 🧠 New research tracks launching soon! | 🏅 IOI Training Bootcamp starts June 10th!
      </div>
    </div>
  );
};

export default MarqueeBar;
