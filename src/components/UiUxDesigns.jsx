import React, { useState } from 'react';
import './UiUxDesigns.css';

const UiUxDesigns = () => {
  // UI/UX design images
  const designs = [
    { id: 1, url: 'https://i.postimg.cc/d3CKt5Pd/Screenshot-2025-05-23-at-2-10-25-PM.png', alt: 'UI/UX Design Screenshot 1' },
    { id: 2, url: 'https://i.postimg.cc/jjj0JxYR/Screenshot-2025-05-23-at-2-11-04-PM.png', alt: 'UI/UX Design Screenshot 2' },
    { id: 3, url: 'https://i.postimg.cc/mr2h5thv/Screenshot-2025-05-03-at-3-19-45-AM.png', alt: 'UI/UX Design Screenshot 3' },
    { id: 4, url: 'https://i.postimg.cc/k5VFT0D0/Proto-Type.png', alt: 'UI/UX Design Prototype' },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the designs array for seamless looping
  const loopDesigns = [...designs, ...designs];

  return (
    <section id="uiux-designs" className="uiux-designs">
      <h2>UI/UX Designs</h2>
      <div
        className={`uiux-designs-marquee-wrapper${isPaused ? ' paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="designs-marquee">
          <div className="designs-marquee-inner">
            {loopDesigns.map((design, idx) => (
              <div key={idx} className="design-card">
                <div className="design-image">
                  <img src={design.url} alt={design.alt} />
                </div>
                {/* Optional: Add design title or description here if needed */}
                {/* <div className="design-content">
                  <h3>{design.alt}</h3>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxDesigns; 