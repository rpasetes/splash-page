import './Hero.css'
import Story from './Story'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-photo">
          <img src="/images/russell.jpeg" alt="Russell with hibiscus flower" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">hi, i'm russell 🤙</h1>

          <Story />

          <div className="hero-links">
            <a href="/resume/russell-pasetes-resume.pdf" className="hero-link">
              resume
            </a>
            <a
              href="https://github.com/rpasetes"
              className="hero-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/russell-pasetes-065a11160/"
              className="hero-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://x.com/rslantonie"
              className="hero-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
