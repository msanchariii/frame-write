import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({
    id,
    title,
    description,
    images,
    speciality = "Wild Life",
}) {
    return (
        <div className="p-6 hover:bg-gray-200 rounded-lg">
            <h2 className="text-xl font-serif font-semibold my-1">{title}</h2>
            <p className="w-full">{description}</p>
            <div className="relative w-full aspect-[3/2] rounded-md my-2">
                <Image
                    alt={title}
                    src={images[0]}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex items-center justify-between my-4">
                <p className="font-semibold">{speciality}</p>
                <Link
                    href={`/photographer-portfolio/projects/${id}`}
                    className="border-2 border-black py-1 px-2 rounded-full text-sm"
                >
                    View Project
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
