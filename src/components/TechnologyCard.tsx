import type { Technology } from '../types/technology'
import { CheckIcon, PlusIcon, StarIcon } from './Icons'

const badgeStyle:Record<string,string>={Popular:'bg-orange-50 text-orange-600',Fast:'bg-cyan-50 text-cyan-600',Essential:'bg-violet-50 text-violet-600',Containers:'bg-blue-50 text-blue-600'}
const difficultyStyle:Record<string,string>={'Beginner-Friendly':'text-emerald-600','Intermediate':'text-amber-600','Advanced':'text-rose-600'}
export function TechnologyCard({tech,added,onAdd}:{tech:Technology;added:boolean;onAdd:(t:Technology)=>void}){
 return <article className="group flex min-h-[232px] flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_5px_24px_rgba(15,23,42,.035)] transition duration-200 hover:-translate-y-1 hover:border-pink-100 hover:shadow-[0_15px_40px_rgba(15,23,42,.08)]">
   <div className="flex items-start justify-between gap-3">
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-100 bg-slate-50 p-2.5"><img src={tech.icon} alt={`${tech.name} icon`} className="h-full w-full object-contain"/></div>
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${badgeStyle[tech.badge]??'bg-slate-100 text-slate-600'}`}>{tech.badge}</span>
   </div>
   <h3 className="mt-4 text-[16px] font-extrabold tracking-[-0.02em] text-slate-900">{tech.name}</h3>
   <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-500">{tech.description}</p>
   <div className="mt-auto pt-4">
     <div className="flex items-center justify-between text-[10px] font-bold">
       <span className="rounded-full bg-slate-50 px-2.5 py-1.5 text-slate-500">{tech.category}</span>
       <span className={difficultyStyle[tech.difficulty]}>{tech.difficulty}</span>
       <span className="flex items-center gap-1 text-slate-500"><StarIcon className="h-3.5 w-3.5 text-amber-400"/> {tech.rating.toFixed(1)}</span>
     </div>
     <button disabled={added} onClick={()=>onAdd(tech)} className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-extrabold transition ${added?'cursor-not-allowed bg-emerald-50 text-emerald-600':'bg-slate-950 text-white hover:bg-slate-800'}`}>{added?<><CheckIcon className="h-3.5 w-3.5"/> Added to Stack</>:<><PlusIcon className="h-3.5 w-3.5"/> Add to Stack</>}</button>
   </div>
 </article>
}
