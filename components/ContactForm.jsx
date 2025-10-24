"use client";
import { useState } from "react";

export default function ContactForm(){
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    setStatus("loading");
    try{
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(state)
      });
      await res.json();
      setStatus(res.ok ? "sent" : "error");
      if(res.ok) setState({name:"", email:"", message:""});
    }catch{ setStatus("error"); }
  }

  const setField = (k, v) => setState(s => ({...s, [k]: v}));

  return (
    <form onSubmit={onSubmit} className="card mt-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input required value={state.name} onChange={e=>setField('name', e.target.value)}
                 className="w-full rounded-md border border-sage/30 bg-white p-3" placeholder="Your name"/>
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input required type="email" value={state.email} onChange={e=>setField('email', e.target.value)}
                 className="w-full rounded-md border border-sage/30 bg-white p-3" placeholder="you@example.com"/>
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea required value={state.message} onChange={e=>setField('message', e.target.value)}
                  className="w-full rounded-md border border-sage/30 bg-white p-3 h-32" placeholder="What would you like to create?" />
      </div>
      <button className="btn btn-primary w-full md:w-auto">Send Message</button>
      {status === "loading" && <p>Sending…</p>}
      {status === "sent" && <p className="text-green-700">Thanks! We’ll be in touch shortly.</p>}
      {status === "error" && <p className="text-red-700">Something went wrong.</p>}
      <p className="text-xs text-softbrown/60">This demo endpoint stores messages in logs only. Replace with your email provider.</p>
    </form>
  );
}
