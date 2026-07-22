import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/lib/use-language";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border border-link/40 bg-link/10 z-10 rounded-xl px-4 py-1">
                            <span className="text-link text-sm font-medium">{t.sections.projects.label}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl">{t.sections.projects.heading}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {t.sections.projects.text}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {DATA.projects.map((project, id) => {
                        const projectText = t.projects[id];
                        return (
                            <BlurFade
                                key={project.href}
                                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                                className="h-full"
                            >
                                <ProjectCard
                                    href={project.href}
                                    title={projectText?.title ?? ""}
                                    description={projectText?.description ?? ""}
                                    dates={projectText?.dates ?? ""}
                                    tags={projectText?.technologies ?? []}
                                    image={project.image}
                                    video={project.video}
                                    links={project.links.map((link) => ({
                                        ...link,
                                        type: t.projectLinkType,
                                    }))}
                                />
                            </BlurFade>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

