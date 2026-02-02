import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const techStack = [
  "React",
  "React Native",
  "Next.js",
  "Laravel",
  "Tailwind CSS",
];

const languages = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Java",
  "Python",
  "C++",
  "HTML",
  "CSS",
];

const projects = [
  {
    title: "NetGenie",
    description:
      "AI-powered ISP assistant for PLDT, Globe, and Converge. Provides instant answers about plans, technical issues, and personalized recommendations — 24/7 support in one place.",
    url: "https://chatbot-frontend-nine-xi.vercel.app/",
    tags: ["React", "Next.js", "AI"],
  },
];

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-joseph-malvar-7851103aa/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/itsmemarkmalvar",
    external: true,
  },
  {
    label: "malvar.593@gmail.com",
    href: "mailto:malvar.593@gmail.com",
    external: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:flex-nowrap">
          <Button variant="link" size="default" className="text-xl font-bold" asChild>
            <Link href="#hero">MJM</Link>
          </Button>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden px-6 py-28 sm:py-36 md:py-40"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--accent-glow),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl">
            <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Bachelor of Science in Computer Science
            </Badge>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Mark Joseph</span> Malvar
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
              I build web and mobile apps with React, Next.js, and Laravel —
              focused on clean code and great UX.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="min-h-12 rounded-full px-7 shadow-lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-12 rounded-full px-7" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-24 sm:py-28">
          <Separator className="mb-16" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">About</h2>
            </div>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              I&apos;m a Computer Science graduate focused on full-stack and
              mobile development. I build responsive web apps with React and
              Next.js, backend systems with Laravel and PHP, and have experience
              across JavaScript, TypeScript, Python, Java, and C++. I enjoy
              turning ideas into clean, user-friendly products.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-24 sm:py-28">
          <Separator className="mb-16" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Skills</h2>
            </div>
            <div className="mt-12 space-y-12">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <Badge
                      key={lang}
                      variant="secondary"
                      className="rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-24 sm:py-28">
          <Separator className="mb-16" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
            </div>
            <div className="mt-12 space-y-6">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="transition-all hover:border-primary/40 hover:shadow-xl sm:px-8 sm:py-6"
                >
                  <CardHeader className="border-b">
                    <CardTitle className="text-xl sm:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <CardAction>
                      <Button variant="outline" size="default" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit →
                        </Link>
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-24 sm:py-28">
          <Separator className="mb-16" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
            </div>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              Open to opportunities and collaboration. Reach out via LinkedIn,
              GitHub, or email.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {contactLinks.map((item) => (
                <Button
                  key={item.label}
                  variant="outline"
                  size="lg"
                  className="min-h-12 rounded-full px-5"
                  asChild
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2"
                  >
                    {item.label}
                    {item.external && <span aria-hidden>↗</span>}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mark Joseph N. Malvar. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
