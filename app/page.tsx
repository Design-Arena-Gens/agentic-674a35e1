export default function HomePage() {
  return (
    <main className="container">
      <section className="card">
        <h1>Merhaba ??</h1>
        <p>Bu sayfa Next.js ile olu?turuldu ve Vercel ?zerinde da??t?lacak.</p>
        <p>H?zl?, modern ve da??t?ma haz?r bir ba?lang??.</p>
        <a className="cta" href="https://nextjs.org" target="_blank" rel="noreferrer">
          Next.js ile devam et
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="#0a1a0f" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 7H17V16" stroke="#0a1a0f" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
        <div className="footer">agentic-674a35e1 ? Next.js 14 ? React 18</div>
      </section>
    </main>
  );
}
