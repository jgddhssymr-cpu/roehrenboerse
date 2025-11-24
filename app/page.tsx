// app/page.tsx

type Listing = {
  id: number;
  title: string;
  tags: string[];
  price: string;
  location: string;
  label?: string;
  category: string;
};

const listings: Listing[] = [
  {
    id: 1,
    title: "ECC83 / 12AX7 Telefunken glatt – gematchtes Paar",
    tags: ["NOS", "getestet", "Privatverkauf"],
    price: "120 €",
    location: "Berlin · Versand möglich",
    label: "NOS",
    category: "Röhre",
  },
  {
    id: 2,
    title: "EL34 Mullard xf2 – Paar",
    tags: ["gebraucht", "gemessen"],
    price: "85 €",
    location: "München · Abholung",
    category: "Endröhre",
  },
  {
    id: 3,
    title: "DIY Röhrenverstärker 2x EL84",
    tags: ["DIY", "funktioniert", "ohne Garantie"],
    price: "350 €",
    location: "Hamburg · Versand/Abholung",
    category: "Verstärker",
  },
];

export default function Home() {
  return (
    <main className="page-main">
      {/* Header */}
      <header className="rb-header">
        <div className="rb-logo">
          <div className="rb-logo-badge" />
          <div>
            <div className="rb-logo-text-main">Röhrenbörse</div>
            <div className="rb-logo-text-sub">
              Marktplatz für Röhren &amp; Vintage Audio
            </div>
          </div>
        </div>
        <div className="rb-header-actions">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-primary">Inserat erstellen</button>
        </div>
      </header>

      {/* Filter */}
      <section className="rb-filters">
        <div className="rb-search">
          <input
            type="search"
            className="rb-input"
            placeholder="Suche nach Typ, Hersteller oder Sockel (z.B. ECC83, Telefunken)..."
          />
        </div>
        <button className="btn btn-ghost">Röhren</button>
        <button className="btn btn-ghost">Verstärker</button>
        <button className="btn btn-ghost">Messgeräte</button>
      </section>

      {/* Grid mit Angeboten */}
      <section className="rb-grid">
        {listings.map((item) => (
          <article key={item.id} className="rb-card">
            {item.label && <span className="rb-chip">{item.label}</span>}

            <h2 className="rb-card-title">{item.title}</h2>

            <div className="rb-card-meta">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="rb-card-price">{item.price}</div>

            <div className="rb-card-footer">
              <span className="rb-location">{item.location}</span>
              <span className="rb-badge-small">{item.category}</span>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="rb-footer">
        <span>© {new Date().getFullYear()} Röhrenbörse</span>
        <span>Impressum · Datenschutz</span>
      </footer>
    </main>
  );
}
