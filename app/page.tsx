import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, FileDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container p-8 md:p-12">
      <div className="grid gap-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
          <div className="hidden md:block flex-shrink-0">
            <Image 
              src="/fotomia.jpg" 
              alt="Diego Suárez" 
              width={200} 
              height={200} 
              className="rounded-full object-cover aspect-square shadow-md"
            />
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Diego Suárez</h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer passionate about building exceptional digital experiences
            </p>
            <p className="text-lg">
              With over 2 years of experience in web development, I specialize in building
              scalable applications using modern technologies. I'm currently focused on
              creating accessible applications at Lola Sux.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="bg-primary text-white border-none">
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-primary text-white border-none">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
              <a href="/Cv.pdf" target="_blank" className="bg-primary text-white border-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <FileDown/></a>
            </div>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none rounded-[.75rem] p-4 border shadow-md">          
          <h2 className="text-lg text-accent mb-2 font-semibold">Background</h2>
          <p>
            Hi, I'm a self-taught developer with hands-on experience in full-stack app development, and client-facing projects. Now, I'm eager to apply my skills in a professional setting, collaborating on diverse tasks like backend, design, and cms management. I constantly like to explore new challenges where I can apply my knowledge
          </p>
        </div>
        <div className="prose dark:prose-invert max-w-none rounded-[.75rem] p-4 border shadow-md">
          <h2 className="text-lg text-accent mb-2 font-semibold">Current Focus</h2>
          <p>
            I'm currently exploring new ways to improve web performance and accessibility
            while keeping up with the latest trends in web development. 
          </p>
        </div>
      </div>
    </div>
  );
}