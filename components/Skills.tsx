import {
    CodeBracketIcon,
    PaintBrushIcon,
    CubeIcon,
    CloudIcon,
    SparklesIcon,
    CommandLineIcon,
    CircleStackIcon,
    ServerIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";

const skills = [
    {
        name: "Frontend Development",
        icon: CodeBracketIcon,
        description: "React, Next.js, TypeScript, JavaScript, React Native, etc.",
        color: "bg-blue-500",
    },
    {
        name: "UI/UX Design",
        icon: PaintBrushIcon,
        description: "Figma, Responsive Design, User Experience, UI/UX Design, etc.",
        color: "bg-green-500",
    },
    {
        name: "CSS & Styling",
        icon: CubeIcon,
        description: "Tailwind CSS, CSS3, Styled Components, Bootstrap, Material UI, etc.",
        color: "bg-yellow-500",
    },
    {
        name: "API Integration",
        icon: CloudIcon,
        description: "REST APIs, GraphQL, WebSockets, API Design, etc.",
        color: "bg-purple-500",
    },
    {
        name: "AI Implementation",
        icon: SparklesIcon,
        description: "OpenAI, AI Integrations, Antigravity AI, Claude AI, Gemini AI, Google AI, DeepSeek AI, etc.",
        color: "bg-indigo-500",
    },
    {
        name: "Backend Development",
        icon: ServerIcon,
        description: "Node.js, Express, FastAPI, NestJS, etc.",
        color: "bg-red-500",
    },
    {
        name: "Database Management",
        icon: CircleStackIcon,
        description: "Supabase, MongoDB, Firebase, Prisma, etc.",
        color: "bg-emerald-500",
    },
    {
        name: "DevOps & Cloud",
        icon: CommandLineIcon,
        description: "Docker, AWS, Bitbucket, Git, etc.",
        color: "bg-orange-500",
    },
    {
        name: "Security & Auth",
        icon: LockClosedIcon,
        description: "OAuth, JWT, NextAuth, Security Best Practices, etc.",
        color: "bg-teal-500",
    },
];

export default function Skills() {
    return (
        <div id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Combining modern technologies with best practices to
                        build scalable and efficient solutions
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-gray-700/50">
                                    <skill.icon className="h-6 w-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {skill.name}
                                </h3>
                            </div>
                            <p className="text-gray-400">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
