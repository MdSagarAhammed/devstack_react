import { ArrowIcon } from './Icons'
import hero from '../assets/hero-stack.png'
export function Hero(){
 return <section id="home" className="relative overflow-hidden bg-white">
   <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-[24rem] w-[24rem] rounded-full bg-pink-100/60 blur-3xl"/>
   <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 sm:px-7 sm:pt-20 lg:grid-cols-[1.03fr_.97fr] lg:px-10 lg:pb-24 lg:pt-20">
    <div className="relative z-10 max-w-xl">
      
      <h1 className="text-[clamp(2.65rem,5vw,4.5rem)] font-black leading-[.98] tracking-[-0.055em] text-slate-950">Build Your Ideal<br/><span className="gradient-text">Development Stack</span></h1>
      <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-500 sm:text-base">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
      <div className="mt-8 flex flex-wrap gap-3">
       <button onClick={()=>document.getElementById('technologies')?.scrollIntoView({behavior:'smooth'})} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(217,70,239,.18)] transition hover:-translate-y-0.5">Explore Technologies </button>
       <button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">Learn More</button>
      </div>
      
    </div>
    <div className="relative flex justify-center lg:justify-end">
      <div className="absolute h-72 w-72 rounded-full bg-violet-100/70 blur-3xl"/>
      <img src={hero} alt="Colorful 3D illustration representing a technology stack" className="relative w-[min(92vw,560px)] drop-shadow-[0_25px_45px_rgba(92,44,170,.14)]"/>
    </div>
   </div>
 </section>
}
