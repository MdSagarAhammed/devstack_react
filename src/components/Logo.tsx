import { useState } from 'react'
import { Logo } from './Logo'
import { MenuIcon, XIcon } from './Icons'

const links = ['Home','Technologies','Projects','About','Contact']
export function Navbar(){
 const [open,setOpen]=useState(false)
 const go=(id:string)=>{setOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'})}
 return <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
   <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
    <div className="hidden lg:block"><button onClick={()=>go('home')} aria-label="Go to home"><Logo/></button></div>
    <div className="flex w-full items-center justify-between lg:hidden">
      <button onClick={()=>setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700" aria-label={open?'Close menu':'Open menu'}>{open?<XIcon className="h-5 w-5"/>:<MenuIcon className="h-5 w-5"/>}</button>
      <button onClick={()=>go('home')} aria-label="Go to home"><Logo/></button>
      <div className="flex items-center gap-1"><button className="rounded-full px-2 py-2 text-[11px] font-semibold text-slate-600">Sign In</button><button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-3 py-2 text-[11px] font-bold text-white">Sign Up</button></div>
    </div>
    <nav className="hidden items-center gap-8 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
      {links.map((link,i)=><button key={link} onClick={()=>go(link)} className={`text-[13px] font-semibold transition hover:text-pink-600 ${i===0?'text-slate-900':'text-slate-500'}`}>{link}</button>)}
    </nav>
    <div className="hidden items-center gap-4 lg:flex">
      <button className="px-2 py-2 text-[13px] font-semibold text-slate-600 hover:text-slate-900">Sign In</button>
      <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">Sign Up</button>
    </div>
   </div>
   {open&&<nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"><div className="mx-auto grid max-w-7xl gap-1">{links.map(link=><button key={link} onClick={()=>go(link)} className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900">{link}</button>)}</div></nav>}
 </header>
}
