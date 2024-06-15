import TopBanner from "@/components/photographer-portfolio/TopBanner";
import React from "react";
import { projects } from "@/data/photographer-portfolio";
import ProjectCard from "@/components/photographer-portfolio/ProjectCard";

function page() {
    return (
        <div>
            <TopBanner heading={"Featured Works"} />
            <div className="text-[#101010] bg-[#f4f4f2] min-h-screen p-12 flex flex-col justify-between gap-y-6 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2   place-content-center place-items-center gap-4">
                    <ProjectCard
                        id={projects[0].id}
                        title={projects[0].title}
                        images={projects[0].images}
                        description={projects[0].description}
                    />
                    <ProjectCard
                        id={projects[1].id}
                        title={projects[1].title}
                        images={projects[1].images}
                        description={projects[1].description}
                    />
                    <ProjectCard
                        id={projects[2].id}
                        title={projects[2].title}
                        images={projects[2].images}
                        description={projects[2].description}
                    />
                    <ProjectCard
                        id={projects[3].id}
                        title={projects[3].title}
                        images={projects[3].images}
                        description={projects[3].description}
                    />
                </div>
            </div>
        </div>
    );
}

export default page;
