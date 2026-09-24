export interface Project {
    title: string;
    description: string;
    github: string;
    href: string;
    tags: string[];
    status: "wip" | "live" | "archived" | undefined
}