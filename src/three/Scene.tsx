import { useState } from "react";

/**
 * PhotoScene — replaces the Three.js sphere with your actual photo.
 * Drop your photo at: public/images/photo.jpg
 * Uses the same .character-model CSS class so all GSAP scroll
 * animations (translateX, opacity, fixed positioning) apply automatically.
 */
const Scene = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="character-model">
      <div className="character-rim" />
      <div className="photo-frame">
        {!imgError ? (
          <img
            src="/images/photo.jpg"
            alt="Srushti Sonavane"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback shown until you drop your photo in public/images/photo.jpg */
          <div className="photo-placeholder">
            add photo.jpg
          </div>
        )}
      </div>
    </div>
  );
};

export default Scene;
