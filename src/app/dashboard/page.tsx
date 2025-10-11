"use client";
import { useMemo, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

type Reading = { time: string; temperature: number; pressure: number; gas: number; methane: number };

export default function DashboardPage() {
  const data = useMemo<Reading[]>(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        time: `${i}:00`,
        temperature: 30 + Math.round(Math.random() * 6),
        pressure: 1 + Math.random() * 0.3,
        gas: 50 + Math.round(Math.random() * 30),
        methane: 60 + Math.round(Math.random() * 10),
      })),
    []
  );

  const [controls, setControls] = useState({ pump: false, valve: false, mixer: false });
  const toggle = (k: keyof typeof controls) => setControls((s) => ({ ...s, [k]: !s[k] }));

  const alert = data[data.length - 1].pressure > 1.25 ? "Overpressure detected" : undefined;

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">IoT Dashboard</h1>
      <p className="mt-2 muted">Live sample data shown for demo. Connect to Firebase/MQTT for real sensors.</p>

      {alert && (
        <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">{alert}</div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-muted bg-[var(--surface)] p-6 text-white">
          <h3 className="font-semibold">Current Readings</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <Stat label="Temperature" value={`${data.at(-1)!.temperature} °C`} />
            <Stat label="Pressure" value={`${data.at(-1)!.pressure.toFixed(2)} bar`} />
            <Stat label="Gas Level" value={`${data.at(-1)!.gas}%`} />
            <Stat label="Methane" value={`${data.at(-1)!.methane}%`} />
          </div>
          <div className="mt-6">
            <h4 className="font-semibold">Controls</h4>
            <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
              {(["pump", "valve", "mixer"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => toggle(k)}
                  className={`rounded-md px-3 py-2 font-semibold text-white ${controls[k] ? "bg-[var(--brand-green)]" : "bg-[var(--brand-brown)]"}`}
                >
                  {k.toUpperCase()} {controls[k] ? "ON" : "OFF"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-muted bg-[var(--surface)] p-6 lg:col-span-2 text-white">
          <h3 className="font-semibold">24h Trends</h3>
          <div className="h-72 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e4a40" />
                <XAxis dataKey="time" stroke="#D3D3D3" />
                <YAxis stroke="#D3D3D3" />
                <Tooltip contentStyle={{ background: '#142B23', border: '1px solid rgba(255,255,255,0.08)', color: '#FFFFFF' }} labelStyle={{ color: '#D3D3D3' }} />
                <Legend wrapperStyle={{ color: '#D3D3D3' }} />
                <Line type="monotone" dataKey="temperature" stroke="#ffb74d" dot={false} />
                <Line type="monotone" dataKey="pressure" stroke="#64b5f6" dot={false} />
                <Line type="monotone" dataKey="gas" stroke="#00C853" dot={false} />
                <Line type="monotone" dataKey="methane" stroke="#FFD700" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-muted bg-[var(--surface)] p-6 text-white">
        <h3 className="font-semibold">Last 24-hour Readings</h3>
        <div className="mt-4 overflow-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left">
                <th className="border-b border-muted p-2">Time</th>
                <th className="border-b border-muted p-2">Temp (°C)</th>
                <th className="border-b border-muted p-2">Pressure (bar)</th>
                <th className="border-b border-muted p-2">Gas (%)</th>
                <th className="border-b border-muted p-2">Methane (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r) => (
                <tr key={r.time} className="odd:bg-surface">
                  <td className="border-b border-muted p-2">{r.time}</td>
                  <td className="border-b border-muted p-2">{r.temperature}</td>
                  <td className="border-b border-muted p-2">{r.pressure.toFixed(2)}</td>
                  <td className="border-b border-muted p-2">{r.gas}</td>
                  <td className="border-b border-muted p-2">{r.methane}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface p-3">
      <div className="text-xs text-black/60">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}


