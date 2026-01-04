import { Mail, Phone, Calendar, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { profileData } from '@/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  const socialLinks = [
    {
      key: 'github',
      href: data.social.github,
      label: 'GitHub',
      Icon: Github,
    },
    {
      key: 'linkedin',
      href: data.social.linkedin,
      label: 'LinkedIn',
      Icon: Linkedin,
    },
  ].filter((link) => typeof link.href === 'string' && link.href.trim().length > 0)

  return (
    <aside className="w-full lg:w-80 bg-card rounded-2xl border border-border p-4 md:p-6 lg:sticky lg:top-8 h-fit">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-accent/20 via-accent/5 to-transparent animate-pulse-slow" />
          <div className="absolute inset-0.5 rounded-3xl bg-secondary overflow-hidden">
            <img
              src={data.avatar}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">{data.name}</h1>
        <p className="text-xs md:text-sm text-muted-foreground bg-secondary px-3 md:px-4 py-1 rounded-lg">
          {data.title}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4 md:my-6" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground uppercase mb-1">Email</p>
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-foreground hover:text-accent transition-colors break-all"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">Phone</p>
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              {data.phone}
            </a>
          </div>
        </div>

        {data.birthday && data.birthday.trim().length > 0 && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground uppercase mb-1">Birthday</p>
              <p className="text-sm text-foreground">{data.birthday}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground uppercase mb-1">Location</p>
            <p className="text-sm text-foreground">{data.location}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
          {socialLinks.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      )}

      {data.links?.length > 0 && (
        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase mb-3 text-center">Projects</p>
          <div className="flex flex-col gap-2">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
              >
                <span className="truncate">{link.label}</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
