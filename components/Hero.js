import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="bg-hero h-[712px]">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 leading-relaxed">
            {" "}
            Saya mahasiswa Informatika semester 6{" "}
          </p>
          <Button variant="yellow" className="mt-14">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
