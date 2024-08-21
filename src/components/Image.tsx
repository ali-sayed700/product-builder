interface IImage {
  imgURL: string;
  alt: string;
  className?: string;
}

const Image = ({ imgURL, alt, className }: IImage) => {
  return <img src={imgURL} alt={alt} className={className} />;
};

export default Image;
