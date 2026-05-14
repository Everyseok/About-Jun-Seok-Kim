import { useState } from 'react';
import { User, FileText, Briefcase, BookOpen, Mail, Github, ExternalLink, MapPin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import profileImage from '../imports/image.png';
import gsrAward from '../imports/image-1.png';
import aspacc from '../imports/IMG_1110.jpeg';
import aiScientist from '../imports/image-2.png';

type TabType = 'about' | 'experience' | 'achievements' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <style>
        {`
          @keyframes navy-service-marquee {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>

      <div
        className="w-full overflow-hidden bg-white border-[3px] border-[#0B3045] text-[#0B3045] text-center font-black px-0 md:px-3 py-5 md:py-6 leading-tight tracking-[-0.03em]"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 900,
          textShadow: '0.45px 0 #0B3045, -0.45px 0 #0B3045'
        }}
      >
        <div className="hidden md:block whitespace-nowrap text-[clamp(24px,2.72vw,44px)]">
          Scheduled to serve in the ROK NAVY · Expected discharge: Apr. 2027
        </div>
        <div
          className="md:hidden w-full overflow-hidden text-[22px] whitespace-nowrap"
          aria-label="Scheduled to serve in the ROK NAVY · Expected discharge: Apr. 2027"
        >
          <div
            className="flex w-max"
            style={{ animation: 'navy-service-marquee 9s linear infinite' }}
          >
            <span className="px-8">Scheduled to serve in the ROK NAVY · Expected discharge: Apr. 2027</span>
            <span className="px-8" aria-hidden="true">
              Scheduled to serve in the ROK NAVY · Expected discharge: Apr. 2027
            </span>
          </div>
        </div>
      </div>

      {/* Top Navigation Tabs */}
      <nav className="bg-primary shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex min-w-max">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 transition-colors whitespace-nowrap ${
                activeTab === 'about'
                  ? 'bg-white text-primary'
                  : 'text-white/80 hover:text-white hover:bg-primary/90'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="text-sm md:text-base">ABOUT ME</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 transition-colors whitespace-nowrap ${
                activeTab === 'experience'
                  ? 'bg-white text-primary'
                  : 'text-white/80 hover:text-white hover:bg-primary/90'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-sm md:text-base">EXPERIENCE</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 transition-colors whitespace-nowrap ${
                activeTab === 'achievements'
                  ? 'bg-white text-primary'
                  : 'text-white/80 hover:text-white hover:bg-primary/90'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm md:text-base">ACHIEVEMENTS</span>
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 transition-colors whitespace-nowrap ${
                activeTab === 'contact'
                  ? 'bg-white text-primary'
                  : 'text-white/80 hover:text-white hover:bg-primary/90'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm md:text-base">CONTACT ME</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* About Me Tab */}
        {activeTab === 'about' && (
          <div className="grid lg:grid-cols-[320px_1fr] gap-4 md:gap-8">
            {/* Left: Professional Details Sidebar */}
            <div className="bg-primary text-white p-4 md:p-6 rounded-lg shadow-lg space-y-4 md:space-y-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 border-4 border-white/30 overflow-hidden mb-3">
                  <img src={profileImage} alt="Jun Seok Kim" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-lg md:text-xl font-medium text-center">Jun Seok Kim</h2>
                <p className="text-xs md:text-sm text-white/80 text-center mt-1">Independent Researcher</p>
              </div>

              {/* Contact Section */}
              <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-white/20">
                <h3 className="text-xs font-medium uppercase tracking-wider">Contact</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex items-start gap-2">
                    <Mail className="w-3 h-3 md:w-4 md:h-4 mt-0.5 shrink-0 text-white/80" />
                    <div>
                      <a href="mailto:junseok3055@gmail.com" className="text-white/90 hover:text-white break-all">junseok3055@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mt-0.5 shrink-0 text-white/80" />
                    <div className="text-white/90">South Korea</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Github className="w-3 h-3 md:w-4 md:h-4 mt-0.5 shrink-0 text-white/80" />
                    <a href="https://github.com/Everyseok" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2 pt-3 md:pt-4 border-t border-white/20">
                <h3 className="text-xs font-medium uppercase tracking-wider">Education</h3>
                <div className="text-xs md:text-sm space-y-1.5">
                  <div>
                    <div className="text-white/90 font-medium">M.S. (Not yet graduated)</div>
                    <div className="text-xs text-white/70">Korea Maritime & Ocean Univ.</div>
                  </div>
                  <div className="pt-1">
                    <div className="text-white/90 font-medium">B.S. Marine System Eng.</div>
                    <div className="text-xs text-white/70">Korea Maritime & Ocean Univ.</div>
                  </div>
                </div>
              </div>

  {/* Skills */}
<div className="space-y-2 pt-3 md:pt-4 border-t border-white/20">
  <h3 className="text-xs font-medium uppercase tracking-wider">Key Skills</h3>
  <div className="grid grid-cols-1 gap-1.5 text-xs">
    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">MATLAB-based Image Processing</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">Python-based Algorithm Development</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">High-Speed Camera Operation</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">Optical Laser Diagnostics</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">High-Voltage Equipment Operation</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">Experimental Data Analysis</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-1 h-1 rounded-full bg-white/80" />
      <span className="text-white/90">Scientific Manuscript Writing</span>
    </div>
  </div>
</div>

              {/* Download CV */}
              <div className="pt-3 md:pt-4 border-t border-white/20">
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-xs md:text-sm py-2">
                  <FileText className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  DOWNLOAD CV
                </Button>
              </div>
            </div>

            {/* Right: About Me Content */}
            <div className="space-y-4 md:space-y-8">
              {/* Selected Work Highlights */}
              <section>
                <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Selected Work Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <div className="bg-muted/30 rounded-lg overflow-hidden mb-2">
                      <img src={gsrAward} alt="GSR2025 Award" className="w-full h-48 md:h-56 object-cover" />
                    </div>
                    <p className="text-xs md:text-sm text-center text-muted-foreground">GSR2025 Award Ceremony at Saudi Arabia</p>
                  </div>
                  <div>
                    <div className="bg-muted/30 rounded-lg overflow-hidden mb-2">
                      <img src={aspacc} alt="ASPACC Presentation" className="w-full h-48 md:h-56 object-cover" />
                    </div>
                    <p className="text-xs md:text-sm text-center text-muted-foreground">ASPACC Conference Presentation at Singapore</p>
                  </div>
                  <div>
                    <div className="bg-muted/30 rounded-lg overflow-hidden mb-2">
                      <img src={aiScientist} alt="AI Scientist Pipeline" className="w-full h-48 md:h-56 object-cover" />
                    </div>
                    <p className="text-xs md:text-sm text-center text-muted-foreground">Autonomous AI Scientist Pipeline (Partial View)</p>
                  </div>
                </div>
              </section>

              {/* Professional Profile */}
              <section>
                <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Professional Profile</h2>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I am Jun Seok Kim, an Independent Researcher and AI Builder with a foundation in combustion engineering, electric-field-assisted thermal-fluid phenomena, and experimental diagnostics. My work focuses on converting complex experimental observations into quantitative evidence, physical mechanisms, and publishable scientific arguments.
                  </p>
                  <p>
                    My current direction is to translate this research methodology into AI systems, including scientific document intelligence, evidence extraction from figures and tables, structured reasoning graphs, AI agent orchestration, and autonomous research workflow tools.
                  </p>
                </div>
              </section>

              {/* Core Skills */}
              <section>
                <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Core Skills</h2>
                <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-1 md:gap-y-2 text-xs md:text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>MS Office Suite — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Hangul Word Processor (HWP) — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>OriginPro Data Analysis — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>MATLAB Computer Vision & Algorithm Development — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Python Algorithm Development & Data Analysis — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Node.js / TypeScript / Next.js Web Development — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Godot Engine / GDScript Game Development — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Git / GitHub / Docker / Cloudflare Workflow — without AI assistance</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Experimental Data Analysis — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Physics-Based Mechanistic Analysis — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Scientific Technical Writing — without AI assistance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>PIV using Mie Scattering</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>LIF / PLIF Laser Diagnostics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>High-Speed Imaging</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>K-Type Thermocouple Measurement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Gas Concentration Measurement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>AI Agent Orchestration</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-4 md:space-y-8">
            {/* Conference Presentations */}
            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Conference Presentations</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                {[
                  {
                    year: '2025',
                    venue: 'Global Students Research Conference 2025',
                    title: 'Experimental Study on Flashback Prevention in H2–CH4 Premixed Flames',
                    authors: 'Jun Seok Kim, Sung Hwan Yoon',
                    award: '1st Place, Chemical Processes Track',
                    type: 'International'
                  },
                  {
                    year: '2025',
                    venue: '15th Asia-Pacific Conference on Combustion, Singapore',
                    title: 'Strategy for Flashback Suppression in Hydrogen–Methane Premixed Flames',
                    authors: 'Jun Seok Kim*, Wonjune Lee, Dae Geun Park, Sung Hwan Yoon',
                    type: 'International'
                  },
                  {
                    year: '2022',
                    venue: '13th Asian Microgravity Symposium, AMS2022',
                    title: 'Experimental Study on the Control of Fire Smoke and Suppressing Fire Using DC Electric Fields',
                    authors: 'Jun Seok Kim, Sung Hwan Yoon',
                    type: 'International'
                  },
                  {
                    year: '2025',
                    venue: 'Fire Science / Fire Protection Conference Abstract',
                    title: 'Experimental Investigation of Smoke Control and Thermal Characteristics in Building Insulation Fires under DC Electric Fields',
                    authors: 'Jun Seok Kim, Yangkyun Kim, Jae-Ung Sim, Sung Hwan Yoon',
                    type: 'Domestic'
                  },
                  {
                    year: '2025',
                    venue: 'Fire Science / Fire Protection Conference Abstract',
                    title: 'An Experimental Study on Heat Transfer Characteristics and Fire Smoke Control in Insulation Fire Using DC Electric Field',
                    authors: 'Jun Seok Kim, Yangkyun Kim, Jae-Ung Sim, Sung Hwan Yoon',
                    type: 'Domestic'
                  },
                  {
                    year: '2024',
                    venue: '68th KOSCO Symposium, Fall Annual Conference',
                    title: 'Experimental Study on Flashback Characteristics and Prevention in H2/CH4 Flames',
                    authors: 'Jun Seok Kim, Jaehyun Park, Won June Lee, Daegeun Park, Sung Hwan Yoon',
                    type: 'Domestic'
                  },
                  {
                    year: '2024',
                    venue: '67th KOSCO Symposium, Spring Annual Conference',
                    title: 'An Experimental Study on the Prevention of Flashback in Hydrogen–Methane Premixed Flames',
                    authors: 'Jun Seok Kim, Daegeun Park, Sung Hwan Yoon',
                    type: 'Domestic'
                  },
                  {
                    year: '2022',
                    venue: 'Korean Society of Combustion, KOSCO 2022 Fall',
                    title: 'Effect of Fire Smoke Control and Fire Suppression by DC Electric Fields',
                    authors: 'Jun Seok Kim, Sung Hwan Yoon',
                    award: 'Best Oral Presentation Award',
                    type: 'Domestic'
                  },
                  {
                    year: '2022',
                    venue: 'Korean Society of Combustion, KOSCO 2022 Spring',
                    title: 'Experimental Study on Fire Smoke Control Using DC Electric Fields',
                    authors: 'Jun Seok Kim, Sung Hwan Yoon',
                    type: 'Domestic'
                  },
                  {
                    year: '2022',
                    venue: 'Korean Institute of Fire Science & Engineering, KIFSE 2022',
                    title: 'A New Conceptual Approach to Fire Smoke Control',
                    authors: 'Jun Seok Kim, Sung Hwan Yoon',
                    type: 'Domestic'
                  }
                ].map((c, i) => (
                  <div key={i} className="pb-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs shrink-0">{c.type}</Badge>
                      <span className="text-muted-foreground">{c.year} | {c.venue}</span>
                    </div>
                    <div className="font-medium mb-1">{c.title}</div>
                    <div className="text-muted-foreground italic">{c.authors}</div>
                    {c.award && (
                      <div className="mt-1">
                        <Badge className="bg-primary text-white text-xs">{c.award}</Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Selected AI & Software Systems */}
            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Selected AI & Software Systems</h2>
              <div className="space-y-3 md:space-y-5 text-xs md:text-sm">
                <div>
                  <h3 className="font-medium mb-2">Autonomous AI Scientist Development (In Development)</h3>
                  <p className="text-muted-foreground mb-3">
                    Domain-general AI scientist system designed to build ontologies across engineering and social-science domains, expand logical-depth reasoning, and refine hypotheses through diffusion-style autonomous research workflows.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'PyTorch', 'Hugging Face Transformers', 'Ontology Engineering', 'Knowledge Graphs', 'RAG', 'Scientific Information Extraction', 'Graph-Based Reasoning', 'Diffusion Models', 'LangGraph'].map(t => (
                      <Badge key={t} variant="outline" className="text-xs bg-primary/5">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <h3 className="font-medium mb-2">Core-Breaker</h3>
                  <p className="text-muted-foreground mb-3">
                    Mobile radial-defense game with central-core defense mechanics, shrinking wall systems, projectile interaction, Android APK build workflow, and store-release preparation.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Godot', 'GDScript', 'Android APK', 'GitHub Actions'].map(t => (
                      <Badge key={t} variant="outline" className="text-xs bg-primary/5">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <h3 className="font-medium mb-2">Tidy Launcher</h3>
                  <p className="text-muted-foreground mb-3">
                    Android launcher MVP for automatic app organization, app classification, and home-screen layout planning using installed-app metadata.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Kotlin', 'Jetpack Compose', 'LauncherApps API'].map(t => (
                      <Badge key={t} variant="outline" className="text-xs bg-primary/5">{t}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-border">
                  <h3 className="font-medium mb-2">Korean Food Trends</h3>
                  <p className="text-muted-foreground mb-3">
                    Timeline-based web application for structuring Korean food trends and related store information into an interactive public-facing service.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js 14', 'TypeScript', 'Prisma', 'Cloudflare D1'].map(t => (
                      <Badge key={t} variant="outline" className="text-xs bg-primary/5">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-4 md:space-y-8">
            {/* Awards */}
            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Awards & Recognition</h2>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                {[
                  { year: '2025', award: '1st Place', org: 'Global Student Research 2025, Chemical Processes Track' },
                  { year: '2024', award: 'Capstone Design Excellence Award', org: 'Korea Maritime & Ocean University' },
                  { year: '2024', award: 'Future-Oriented Award', org: 'Dev-ton Hackathon, Busan Metropolitan City' },
                  { year: '2022', award: 'Best Oral Presentation Award', org: 'Korean Society for Combustion' },
                  { year: '2022', award: 'Award Winner', org: 'Convergence Idea Contest' }
                ].map((a, i) => (
                  <div key={i} className="flex gap-6 pb-3 border-b border-border last:border-0">
                    <div className="w-12 font-medium text-primary shrink-0">{a.year}</div>
                    <div className="flex-1">
                      <div className="font-medium">{a.award}</div>
                      <div className="text-muted-foreground">{a.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Journal Manuscripts</h2>
              <div className="space-y-3 md:space-y-5 text-xs md:text-sm">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex-1 leading-snug">
                      Electrically assisted control of fire smoke and flame extinction in expanded polystyrene via ionic wind under DC electric fields
                    </h3>
                    <Badge className="bg-primary text-white text-xs ml-4 shrink-0">2026</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">Case Studies in Thermal Engineering</p>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="text-xs bg-primary/5">First author</Badge>
                    <Badge variant="outline" className="text-xs">Published / In Press</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Experimental study of DC-electric-field-assisted fire smoke and flame control, connecting combustion behavior with field-induced flow effects.
                  </p>
                </div>

                <div className="pt-5 border-t border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex-1 leading-snug">
                      Dual-Ignition Concept for Flashback Reversal and Hydrodynamic Scaling in H₂–CH₄ Premixed Flames
                    </h3>
                    <Badge variant="outline" className="text-xs ml-4 shrink-0">Under Revision</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">Proceedings of the Combustion Institute</p>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="text-xs bg-primary/5">First author</Badge>
                    <Badge variant="outline" className="text-xs">R1 Review</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Proof-of-concept study demonstrating post-flashback recovery through dual ignition and a reduced-order hydrodynamic scaling framework for upward/downward flame-speed asymmetry.
                  </p>
                </div>

                <div className="pt-5 border-t border-border">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex-1 leading-snug">
                      Study on behavior and emission of methane/hydrogen diffusion flame with applied DC electric field
                    </h3>
                    <Badge className="bg-primary text-white text-xs ml-4 shrink-0">2023</Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">Journal of Natural Gas Science and Engineering</p>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="text-xs bg-primary/5">Co-author</Badge>
                    <Badge variant="outline" className="text-xs">Published</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Experimental investigation of DC electric field effects on methane/hydrogen diffusion flame behavior and emission characteristics.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-4 md:space-y-8">
            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Contact Information</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:junseok3055@gmail.com" className="text-primary hover:underline">junseok3055@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <a href="https://github.com/Everyseok" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/Everyseok</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">ORCID</div>
                    <a href="https://orcid.org/0009-0005-3218-4152" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">0009-0005-3218-4152</a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base md:text-xl font-medium mb-2 md:mb-4">Open to Opportunities</h2>
              <div className="text-xs md:text-sm text-muted-foreground space-y-2 md:space-y-3">
                <p>
                  I am currently looking for roles and project opportunities where I can apply my background in experimental research, computer vision, scientific data analysis, and AI-based research workflows. I am especially interested in contributing to teams working on scientific AI systems, AI/CV engineering, scientific software, combustion research, or thermal-fluid engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">AI/CV Roles</Badge>
                  <Badge variant="outline" className="text-xs">Scientific Software</Badge>
                  <Badge variant="outline" className="text-xs">Research Engineering</Badge>
                  <Badge variant="outline" className="text-xs">Experimental Data Analysis</Badge>
                  <Badge variant="outline" className="text-xs">Scientific AI Systems</Badge>
                  <Badge variant="outline" className="text-xs">Research Collaboration</Badge>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
