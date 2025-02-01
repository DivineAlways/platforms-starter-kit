import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Database, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <MessageSquare className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">Connect with like-minded learners and get help when you need it.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <Database className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Hands-On Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">Gain practical experience with real-world projects and applications.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <TrendingUp className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Cutting-Edge Tech</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">Stay updated with the latest technologies and frameworks in the industry.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
