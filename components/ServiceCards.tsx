
type Card = { title: string; items: string[] }
const cards: Card[] = [
  { title: 'VLSFO', items: ['ISO 8217 specs', 'Global availability'] },
  { title: 'MGO', items: ['Marine gas oil', 'Lubricants & additives'] },
  { title: 'HSFO', items: ['3.5% where permitted', 'Risk‑managed pricing'] },
]

export default function ServiceCards() {
  return (
    <section className="section grid md:grid-cols-3 gap-5 mt-8">
      {cards.map((c) => (
        <div key={c.title} className="card bg-white/80 dark:bg-white/5">
          <div className="p-6">
            <h3 className="text-xl font-serif mb-2">{c.title}</h3>
            <ul className="text-sm opacity-80 list-disc pl-4">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
