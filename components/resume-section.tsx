import { BookOpen, Briefcase, Award, Hammer } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resume</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                {item.role}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                {item.company} — {item.location}
              </p>
              <p className="text-xs md:text-sm text-accent mb-3">{item.period}</p>

              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {item.subsections?.map((sub, subIndex) => (
                <div key={subIndex} className="mt-4 md:mt-5 p-4 md:p-5 bg-secondary rounded-xl md:rounded-2xl border border-border">
                  <h5 className="text-sm md:text-base font-semibold text-foreground mb-3">{sub.title}</h5>
                  <ul className="space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                    {sub.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border"
            >
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-3">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-lg bg-background border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Hammer className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Personal Projects</h3>
        </div>
        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border"
            >
              <h4 className="text-base md:text-lg font-semibold text-foreground">{project.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">{project.role}</p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground leading-relaxed list-disc pl-4">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <p className="text-xs md:text-sm text-muted-foreground mt-4">
                <span className="font-medium text-foreground">Tech Stack:</span> {project.techStack}
              </p>
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 rounded-lg bg-background border border-border text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Certifications</h3>
        </div>
        <div className="space-y-3">
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 md:p-5 bg-secondary rounded-xl md:rounded-2xl border border-border"
            >
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-semibold text-foreground hover:text-accent transition-colors"
                >
                  {cert.title}
                </a>
              ) : (
                <p className="text-sm md:text-base font-semibold text-foreground">{cert.title}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
