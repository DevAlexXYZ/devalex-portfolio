import Image from "next/image";

const projects = [
    {
        name: "P1ne AI NFT Platform",
        description:
            "P1NE AI NFTs creates unique, mathematically-generated digital art pieces on the blockchain. Each artwork is born from pure code, producing one-of-a-kind algorithmic masterpieces that blend technology with artistic expression. With strictly limited collections of 50 pieces each, P1NE offers collectors exclusive access to verifiably unique digital art, backed by smart contracts on the Ethereum network. Join our community of digital art enthusiasts and explore the intersection of artificial intelligence, mathematics, and creative expression.",
        image: "/projects/img_project-p1ne.png",
        technologies: ["React", "JavaScript", "Styled Components"],
        color: "bg-blue-800",
        link: "https://pone-kappa.vercel.app/",
    },
    {
        name: "Home BudgIT",
        description:
            "A personal finance management application that helps users track expenses, set budgets, and visualize spending patterns through interactive charts and reports.",
        image: "/projects/home-budgit.png",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
        color: "bg-green-800",
        link: "https://home-budg-it.vercel.app/",
    },
    {
        name: "EventFrend",
        description:
            "A social platform that connects people with similar event interests. Users can create, discover, and join local events while building their social network.",
        image: "/projects/eventfrend.png",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        color: "bg-yellow-800",
        link: "https://www.eventfrend.com/",
    },
    {
        name: "Horizon",
        description:
            "A modern banking application interface that showcases responsive design and smooth animations. Features include transaction history, account management, and budget tracking.",
        image: "/projects/bankingapp.png",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        color: "bg-yellow-800",
        link: "https://bankingapp-eight.vercel.app/sign-in",
    },
];

export default function Projects() {
    return (
        <div id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.name}
                            className="group rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all"
                        >
                            <div className="relative">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Want to See More?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            These are just a few highlights from my portfolio. I
                            have many more exciting projects involving AI,
                            blockchain, and full-stack development. Let&apos;s
                            connect and discuss them!
                        </p>
                        <a
                            href="https://www.linkedin.com/in/alexander-b-63a80a109/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                        >
                            Get In Touch
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
