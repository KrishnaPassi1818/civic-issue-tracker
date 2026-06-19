import React from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/bg.png'
import locIcon from '../assets/icons/locIcon.png'
import mobileIcon from '../assets/icons/mobileIcon.png'
import adminIcon from '../assets/icons/adminIcon.png'
import blueArrowIcon from '../assets/icons/blueArrowIcon.png'
import yellowArrowIcon from '../assets/icons/yellowArrowIcon.png'

function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="text-white w-full min-h-screen"
      style={{
        backgroundColor: '#020817',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'repeat',
      }}
    >

      {/* hero section */}
      <div className="pt-8 px-4 flex flex-col items-center text-center">

        {/* Logo row */}
        <div className="flex items-center gap-3 mb-6">
          <img className="w-10 h-10 sm:w-14 sm:h-14" src={locIcon} alt="locationIcon" />
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-slate-50">
              CivicReport
            </h3>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">
              civic issue reporting &amp; resolution
            </p>
          </div>
        </div>

        {/* headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Your City.
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3db4f2] pt-1 leading-tight">
          Your Voice.
        </h2>

        <p className="max-w-xs sm:max-w-md md:max-w-lg text-center text-sm sm:text-base md:text-lg pt-4 font-normal text-slate-500 leading-relaxed">
          A unified platform connecting citizens and municipal authorities to report, track, and resolve civic infrastructure issues in real time.
        </p>
      </div>

      {/* stats or numbers */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-10 px-4">
        <div className="text-center">
          <p className="font-medium text-3xl sm:text-4xl text-[#3db4f2]">1,284</p>
          <p className="text-xs text-blue-200 mt-1">Issues Reported</p>
        </div>
        <div className="text-center">
          <p className="font-medium text-3xl sm:text-4xl text-yellow-500">437</p>
          <p className="text-xs text-blue-200 mt-1">In Progress</p>
        </div>
        <div className="text-center">
          <p className="font-medium text-3xl sm:text-4xl text-green-400">6,096</p>
          <p className="text-xs text-blue-200 mt-1">Resolved Total</p>
        </div>
      </div>

      {/* portal cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4 sm:px-8 mt-10 pb-10 max-w-5xl mx-auto">

        {/* citizen card */}
        <button
          onClick={() => navigate('/citizen/login')}
          className="group text-left w-full sm:w-[calc(50%-12px)] max-w-md bg-[#131921] rounded-3xl p-6 sm:p-8 transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-[#3db4f2] focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer border border-transparent hover:border-[#3db4f2]/20"
          aria-label="Enter Citizen Portal"
        >
          <img className="pb-6 w-12 sm:w-16" src={mobileIcon} alt="mobileIcon" />
          <p className="text-base sm:text-lg font-medium text-white">Citizen Portal</p>
          <p className="text-xs sm:text-sm text-[#3db4f2] uppercase tracking-wider mt-0.5">
            Mobile First Experience
          </p>
          <p className="pt-3 text-xs sm:text-sm font-medium text-[#4D6584] leading-relaxed">
            Report potholes, broken lights, illegal dumping, and more. Upload photos, pin your location, and track every report from submission to resolution.
          </p>
          <p className="pt-5 text-xs sm:text-sm font-medium text-[#3db4f2] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
            Enter Citizen Portal
            <img className="w-3.5 sm:w-4 inline" src={blueArrowIcon} alt="arrowIcon" />
          </p>
        </button>

        {/* admin card */}
        <button
          onClick={() => navigate('/admin/login')}
          className="group text-left w-full sm:w-[calc(50%-12px)] max-w-md bg-[#131921] rounded-3xl p-6 sm:p-8 transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer border border-transparent hover:border-yellow-500/20"
          aria-label="Enter Municipal Admin Portal"
        >
          <img className="pb-6 w-12 sm:w-16" src={adminIcon} alt="adminIcon" />
          <p className="text-base sm:text-lg font-medium text-white">Municipal Admin</p>
          <p className="text-xs sm:text-sm text-yellow-500 uppercase tracking-wider mt-0.5">
            Desktop Operations Dashboard
          </p>
          <p className="pt-3 text-xs sm:text-sm font-medium text-[#4D6584] leading-relaxed">
            Monitor all live reports on an interactive map, manage the resolution workflow via table or Kanban, and keep citizens informed with status updates.
          </p>
          <p className="pt-5 text-xs sm:text-sm font-medium text-yellow-500 flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
            Enter Admin Portal
            <img className="w-3.5 sm:w-4 inline" src={yellowArrowIcon} alt="arrowIcon" />
          </p>
        </button>

      </div>

      {/* footer */}
      <div className="text-slate-600 font-medium text-xs text-center pb-5 px-4">
        UI/UX Design Prototype &nbsp;·&nbsp; CivicReport v1.0 &nbsp;·&nbsp; June 2026
      </div>

    </div>
  )
}

export default Home