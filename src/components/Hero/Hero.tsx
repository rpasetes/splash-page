import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-photo">
          <img src="/images/russell.jpeg" alt="Russell with hibiscus flower" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">hi, i'm russell 🤙</h1>

          <p className="hero-blurb">
            Placeholder blurb text. The real content with hidden links will come in PR 5.
          </p>

          <div className="hero-links">
            <a href="#resume" className="hero-link">
              resume
            </a>
            <a href="#github" className="hero-link">
              github
            </a>
            <a href="#linkedin" className="hero-link">
              linkedin
            </a>
            <a href="#twitter" className="hero-link">
              twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
