import ParallaxContainer from "../component/ParallaxContainer";

export default function Home() {
  return (
    <div>
      <ParallaxContainer
        image="https://wallpapercave.com/dwp2x/wp6445011.jpg"
        title="Project Title"
        description="project description"
      />
      <div className="h-60"></div>
    </div>
  );
}
