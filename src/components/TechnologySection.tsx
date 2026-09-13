import type { Technology } from '../types/technology'
import { TechnologyCard } from './TechnologyCard'
import { LoadingState, ErrorState } from './LoadingState'
import { YourStack } from './YourStack'

export function TechnologySection({technologies,loading,error,stack,onAdd,onRemove,onClear}:{technologies:Technology[];loading:boolean;error:string|null;stack:Technology[];onAdd:(t:Technology)=>void;onRemove:(id:number)=>void;onClear:()=>void}){
 return <section id="technologies" className="bg-slate-50/70 px-5 py-16 sm:px-7 lg:px-10 lg:py-20"><div className="mx-auto max-w-7xl"><div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-2xl font-extrabold  text-black">Explore the <span className="gradient-text">Technologies</span></p><p className="mt-2 max-w-xl text-[11px] leading-6 text-slate-500">Pick one technology per category to build your ideal stack.</p></div></div><div className="grid gap-6 lg:grid-cols-[1fr_300px]"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{loading?<LoadingState/>:error?<ErrorState message={error}/>:technologies.map(t=><TechnologyCard key={t.id} tech={t} added={stack.some(s=>s.id===t.id)} onAdd={onAdd}/>)}</div><YourStack stack={stack} onRemove={onRemove} onClear={onClear}/></div></div></section>
}
