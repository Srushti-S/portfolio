import { useState } from "react";

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
           <div className="photo-placeholder">
            add photo.jpg
          </div>
        )}
      </div>
    </div>
  );
};

export default Scene;
