import { useState } from 'react';

const MarqueeBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-blue-600 text-white text-sm font-big py-4 px-4 w-full overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-2 text-white text-lg"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Scrolling text */}
      <div className="whitespace-nowrap animate-marquee text-lg font-medium">
        🚨 Foundation postgraduate course in data science and database systems: APPLICATION TO NATIONAL DEVELOPMENT Starts 13th - 27th July, 2025 ! | 🧠 New research tracks launching soon! | 🏅 IOI Training Bootcamp starts soon!
      </div>
    </div>
  );
};

export default MarqueeBar;
