interface WorkImageProps {
  image: string;
  alt: string;
  link?: string;
}

const WorkImage = ({ image, alt, link }: WorkImageProps) => {
  return (
    <div className="work-image">
      <div className="work-image-in">
        <a href={link || "#"} target="_blank" rel="noreferrer">
          <img src={image} alt={alt} loading="lazy" />
          <div className="work-link">↗</div>
        </a>
      </div>
    </div>
  );
};

export default WorkImage;
