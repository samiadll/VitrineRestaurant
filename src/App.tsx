import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1 className="restaurant-name">Fuego Latino Paris</h1>
        <p className="subtitle">
          Dinner • Live Performers • Experience • Clubbing
        </p>
        <div className="header-buttons">
          <button className="btn-outline">Réserver une table</button>
          <button className="btn-outline">Découvrir le menu</button>
        </div>
      </header>

      {/* Section Qui sommes-nous */}
      <section className="about">
        <h2 className="section-title">Qui sommes-nous ?</h2>
        <p>
          Bienvenue chez <span className="highlight">Fuego Latino Paris</span>,
          un lieu où la gastronomie rencontre la fête. Chaque soir, nous vous
          proposons une expérience unique mêlant{" "}
          <span className="highlight">dîner raffiné</span>,{" "}
          <span className="highlight">cocktails signatures</span> et{" "}
          <span className="highlight">live performers</span> qui enflamment la
          scène.
          <br />
          Du mercredi au dimanche, de 21h à 2h, notre équipe vous invite à vivre
          une immersion sensorielle où les saveurs, la musique et l’ambiance
          festive créent des souvenirs inoubliables.
        </p>
      </section>

      {/* Section Features */}
      <section className="features">
        <div className="card">
          <h3 className="card-title">Cuisine raffinée</h3>
          <p className="card-text">
            Une expérience culinaire gourmande aux saveurs latines et
            internationales.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Cocktails signature</h3>
          <p className="card-text">
            Des créations originales préparées par nos mixologues experts.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Live Performers</h3>
          <p className="card-text">
            DJs, artistes et shows exclusifs pour enflammer vos soirées.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          📍 187 Av. Gallieni, Bondy | 📞 06 59 13 93 91 | Ouvert du mercredi au
          dimanche • 21h - 2h
        </p>
      </footer>
    </div>
  );
}
