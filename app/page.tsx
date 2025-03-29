import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer passionate about building exceptional digital experiences
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <GithubIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <LinkedinIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            With over 5 years of experience in web development, I specialize in building
            scalable applications using modern technologies. I'm currently focused on
            creating accessible, human-centered products at Company X.
          </p>
          
          <h2>Background</h2>
          <p>
            I started my journey as a self-taught developer, and since then, I've worked
            with various technologies and frameworks. My experience spans from frontend
            development with React and Next.js to backend development with Node.js and
            Python.
          </p>

          <h2>Current Focus</h2>
          <p>
            I'm currently exploring new ways to improve web performance and accessibility
            while keeping up with the latest trends in web development. I'm also
            passionate about mentoring other developers and contributing to open-source
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}