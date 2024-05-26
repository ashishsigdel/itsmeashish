import { Button, SectionTitle } from "@/components/common";
import { ProjectCard } from "@/components/home/projects";

export default function Highlight() {
  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto">
      <SectionTitle title={"Projects Highlight"} />
      <div className="flex flex-wrap gap-10 mt-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="mx-auto">
        <Button title={"All-Projects"} />
      </div>
    </div>
  );
}
