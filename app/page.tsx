'use client'

import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  profileData,
  aboutData,
  resumeData,
} from '@/lib/portfolio-data'

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="space-y-10 md:space-y-12">
                <AboutSection data={aboutData} />
                <div className="h-px bg-border" />
                <ResumeSection data={resumeData} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
