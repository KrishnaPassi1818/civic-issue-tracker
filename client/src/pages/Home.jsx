import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/bg.png'
import locIcon from '../assets/icons/locIcon.png'
import mobileIcon from '../assets/icons/mobileIcon.png'
import adminIcon from '../assets/icons/adminIcon.png'
import blueArrowIcon from '../assets/icons/blueArrowIcon.png'
import yellowArrowIcon from '../assets/icons/yellowArrowIcon.png'

// stats configuration
// to connect real-time data later, we will replace these values with API response data.
// example: const stats = await fetch('/api/stats').then(r => r.json())
const STATS = [
  { id: 'stat-reported', value: '1,283', label: 'Issues Reported', color: 'text-[#3db4f2]'},
  { id: 'stat-progress', value: '437', label: 'In Progress',color: 'text-yellow-500'},
  { id: 'stat-resolved', value: '6,096', label: 'Resolved Total', color: 'text-green-400'},
]

// ─── PORTAL CARDS CONFIG ─────────────────────────────────────────────────────
// To add a new portal, just push a new object here — no JSX changes needed.
const PORTALS = [
  {
    id:          'portal-citizen',
    route:       '/citizen/login',
    icon:        mobileIcon,
    iconAlt:     'mobileIcon',
    title:       'Citizen Portal',
    subtitle:    'Mobile First Experience',
    description: 'Report potholes, broken lights, illegal dumping, and more. Upload photos, pin your location, and track every report from submission to resolution.',
    cta:         'Enter Citizen Portal',
    ctaIcon:     blueArrowIcon,
    accentColor: 'text-[#3db4f2]',
    hoverShadow: 'hover:shadow-blue-500/50',
    hoverBorder: 'hover:border-[#3db4f2]/20',
    focusRing:   'focus:ring-[#3db4f2]',
    ariaLabel:   'Enter Citizen Portal',
  },
  {
    id:          'portal-admin',
    route:       '/admin/login',
    icon:        adminIcon,
    iconAlt:     'adminIcon',
    title:       'Municipal Admin',
    subtitle:    'Desktop Operations Dashboard',
    description: 'Monitor all live reports on an interactive map, manage the resolution workflow via table or Kanban, and keep citizens informed with status updates.',
    cta:         'Enter Admin Portal',
    ctaIcon:     yellowArrowIcon,
    accentColor: 'text-yellow-500',
    hoverShadow: 'hover:shadow-yellow-500/50',
    hoverBorder: 'hover:border-yellow-500/20',
    focusRing:   'focus:ring-yellow-500',
    ariaLabel:   'Enter Municipal Admin Portal',
  },
]

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function StatCard({ id, value, label, color }) {
  return (
    <div id={id} className="text-center">
      <p className={`font-medium text-3xl sm:text-4xl ${color}`}>{value}</p>
      <p className="text-xs text-blue-200 mt-1">{label}</p>
    </div>
  )
}

function PortalCard({ portal, onClick }) {
  const { id, icon, iconAlt, title, subtitle, description, cta, ctaIcon, accentColor, hoverShadow, hoverBorder, focusRing, ariaLabel,
  } = portal

  return (
    <button
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        group text-left w-full sm:w-[calc(50%-12px)] max-w-md
        bg-[#131921] rounded-3xl p-6 sm:p-8
        transition duration-200 ease-in-out
        hover:-translate-y-1 hover:shadow-2xl ${hoverShadow}
        focus:outline-none focus:ring-2 ${focusRing} focus:ring-offset-2 focus:ring-offset-slate-950
        cursor-pointer border border-transparent ${hoverBorder}
      `}
    >
      <img className="pb-6 w-12 sm:w-16" src={icon} alt={iconAlt} />
      <p className="text-base sm:text-lg font-medium text-white">{title}</p>
      <p className={`text-xs sm:text-sm ${accentColor} uppercase tracking-wider mt-0.5`}>{subtitle}</p>
      <p className="pt-3 text-xs sm:text-sm font-medium text-[#4D6584] leading-relaxed">{description}</p>
      <p className={`pt-5 text-xs sm:text-sm font-medium ${accentColor} flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200`}>
        {cta}
        <img className="w-3.5 sm:w-4 inline" src={ctaIcon} alt="arrowIcon" />
      </p>
    </button>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

function Home() {
  const navigate = useNavigate()

  return (
    <div
      id="home-page"
      className="text-white w-full min-h-screen"
      style={{ backgroundColor: '#020817', backgroundImage: `url(${bgImage})`, backgroundRepeat: 'repeat',}}
    >

      {/* hero */}
      <section id="hero-section" className="pt-8 px-4 flex flex-col items-center text-center">

        {/* logo */}
        <div id="brand-logo" className="flex items-center gap-3 mb-6">
          <img className="w-10 h-10 sm:w-14 sm:h-14" src={locIcon} alt="locationIcon" />
          <div className="text-left">
            <h3 id="brand-name" className="text-xl sm:text-2xl font-bold tracking-widest text-slate-50">
              CivicReport
            </h3>
            <p id="brand-tagline" className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">
              civic issue reporting &amp; resolution
            </p>
          </div>
        </div>

        {/* headline */}
        <h1 id="hero-headline" className="sr-only">CivicReport — Your City. Your Voice.</h1>
        <h2 aria-hidden="true" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Your City.
        </h2>
        <h2 aria-hidden="true" className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3db4f2] pt-1 leading-tight">
          Your Voice.
        </h2>

        {/* subtext */}
        <p id="hero-description" className="max-w-xs sm:max-w-md md:max-w-lg text-center text-sm sm:text-base md:text-lg pt-4 font-normal text-slate-500 leading-relaxed">
          A unified platform connecting citizens and municipal authorities to report, track, and resolve civic infrastructure issues in real time.
        </p>
      </section>

      {/* stats */}
      {/* future: fetch STATS from /api/stats and pass as props or use useState+useEffect */}
      <section id="stats-section" className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-10 px-4">
        {STATS.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      {/* ── Portal Cards ── */}
      <section id="portals-section" className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4 sm:px-8 mt-10 pb-10 max-w-5xl mx-auto">
        {PORTALS.map((portal) => (
          <PortalCard
            key={portal.id}
            portal={portal}
            onClick={() => navigate(portal.route)}
          />
        ))}
      </section>

      {/* ── Footer ── */}
      <footer id="home-footer" className="text-slate-600 font-medium text-xs text-center pb-5 px-4">
        UI/UX Design Prototype &nbsp;·&nbsp; CivicReport v1.0 &nbsp;·&nbsp; June 2026
      </footer>

    </div>
  )
}

export default Home