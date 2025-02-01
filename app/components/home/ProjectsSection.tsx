import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Database, TrendingUp, Gamepad } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
          Our Projects
        </h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <MessageSquare className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">AI Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">Explore the world of conversational AI with our advanced chatbot project.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <Database className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Data Engineering Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">Master the art of data engineering with our comprehensive learning path.</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <TrendingUp className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Financial App for Crypto/Stocks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">
                Track and analyze cryptocurrency and stock markets with our powerful financial tool.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-900 border-green-700">
            <CardHeader>
              <Gamepad className="h-10 w-10 mb-2" />
              <CardTitle className="font-mono">Game Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-mono">
                Manage and monitor your gaming statistics with our intuitive game dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
