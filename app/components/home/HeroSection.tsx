import Button from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-green-700">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter font-mono sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Low Perry Community Hub
            </h1>
            <p className="mx-auto max-w-[700px] text-green-400 md:text-xl font-mono">
              Access all our projects in one place for a single price. Learn, experiment, and grow with our
              collection of cutting-edge projects.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-green-700 text-black hover:bg-green-600">Get Started</Button>
            <Button variant="outline" className="border-green-700 text-green-400 hover:bg-green-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
