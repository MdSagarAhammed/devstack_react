export function Logo({dark=false}:{dark?:boolean}){
  return <div className={`flex items-center gap-2.5 ${dark?'text-white':'text-slate-900'}`}>
    <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 text-[11px] font-black text-white shadow-[0_5px_14px_rgba(236,72,153,.22)]">&lt;/&gt;</div>
    <span className="text-[15px] font-extrabold tracking-[-0.03em]">Dev <span className="gradient-text">Stack</span></span>
  </div>
}
