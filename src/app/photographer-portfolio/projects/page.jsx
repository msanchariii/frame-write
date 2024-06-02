import TopBanner from "@/components/photographer-portfolio/TopBanner";
import React from "react";
import { projects } from "@/data/photographer-portfolio";
import ProjectCard from "@/components/photographer-portfolio/ProjectCard";

function page() {
    return (
        <div>
            <TopBanner heading={"Projects"} />
            <div className="text-[#101010] bg-[#f4f4f2] min-h-screen p-12 flex flex-col justify-between gap-y-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2   place-content-center place-items-center gap-4">
                    {projects.map((project) => {
                        return (
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                images={project.images}
                                description={project.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default page;
