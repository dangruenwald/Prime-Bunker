
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10">
      <div className="section py-10 text-sm opacity-80">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Prime Bunker Services. All rights reserved.</p>
          <p>Compliance — ISO 8217 • MARPOL Annex VI • Chain-of-Custody</p>
        </div>
      </div>
    </footer>
  )
}
