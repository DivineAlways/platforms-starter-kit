import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
          Simple Pricing
        </h2>
        <div className="mx-auto max-w-sm">
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <CardTitle className="font-mono">All-Access Pass</CardTitle>
              <CardDescription className="font-mono text-green-400">Get access to all our projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2 font-mono">$29.99/month</div>
              <ul className="list-disc list-inside space-y-2 font-mono">
                <li>Access to all current projects</li>
                <li>New projects as they're released</li>
                <li>Community support</li>
                <li>Regular updates and improvements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
