import Button from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl">Ready to Start Learning?</h2>
            <p className="mx-auto max-w-[600px] text-green-400 md:text-xl font-mono">
              Join the Low Perry Community Hub today and get access to all our projects. Start your journey towards
              mastering cutting-edge technologies.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-green-700 text-black hover:bg-green-600 font-mono">
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
