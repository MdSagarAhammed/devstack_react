import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TechnologySection } from './components/TechnologySection'
import { Footer } from './components/Footer'
import { useTechnologies } from './hooks/useTechnologies'
import type { Technology } from './types/technology'

function App(){
const {technologies,loading,error}=useTechnologies()
 const [stack,setStack]=useState<Technology[]>([])
 const add=(tech:Technology)=>{if(stack.some(item=>item.id===tech.id)){toast.warning(`${tech.name} is already in your stack.`);return} setStack(current=>[...current,tech]);toast.success(`${tech.name} added to your stack.`)}
 const remove=(id:number)=>{const item=stack.find(t=>t.id===id);setStack(current=>current.filter(t=>t.id!==id));if(item)toast.info(`${item.name} removed from your stack.`)}
 const clear=()=>{if(stack.length===0)return;const count=stack.length;setStack([]);toast.info(`${count} technology${count===1?'':'ies'} removed from your stack.`)}
 return <div className="min-h-screen bg-white text-slate-900"><Navbar/><main><Hero/><TechnologySection technologies={technologies} loading={loading} error={error} stack={stack} onAdd={add} onRemove={remove} onClear={clear}/></main><Footer/><ToastContainer position="bottom-right" autoClose={2600} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light"/></div>
}
export default App
