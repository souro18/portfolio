interface IProps {
  image: string;
  title: string;
  description: string;
}

const ParallaxContainer = ({ image, title, description }: IProps) => {
  return (
    <div
      className="parallax-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h2 className="text-6xl text-bold">{title}</h2>
        <h5 className="text-xl text-semibold">{description}</h5>
      </div>
    </div>
  );
};

export default ParallaxContainer;
