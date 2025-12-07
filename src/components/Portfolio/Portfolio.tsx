import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <h2 className="portfolio-title">portfolio</h2>
        <p className="portfolio-subtitle">
          Real project content coming in PR 12. For now, this is the "deeper water" section.
        </p>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <h3>Project One</h3>
            <p>Placeholder for future project card</p>
          </div>

          <div className="portfolio-card">
            <h3>Project Two</h3>
            <p>Placeholder for future project card</p>
          </div>

          <div className="portfolio-card">
            <h3>Project Three</h3>
            <p>Placeholder for future project card</p>
          </div>
        </div>
      </div>
    </section>
  )
}
