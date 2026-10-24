import Image from 'next/image';
import logo from '../public/images/logo.png';

const PLATFORM_URL = 'https://platform.yumco.fr/sola-7';

// Plats d'exemple de la maquette : à remplacer par la vraie carte avant la mise en ligne.
const dishes: { name: string; tag: string; desc: string }[] = [
  {
    name: 'Plateau sushi & sashimi',
    tag: 'Sushis',
    desc: 'Saumon, thon et daurade, riz vinaigré à la minute, gingembre et wasabi.',
  },
  {
    name: 'Ramen tonkotsu',
    tag: 'Bols chauds',
    desc: 'Bouillon de porc longuement mijoté, chashu, œuf mariné et nouilles fraîches.',
  },
  {
    name: 'Gyoza grillés',
    tag: 'À partager',
    desc: 'Raviolis poulet et légumes, dorés à la poêle, sauce ponzu.',
  },
  {
    name: 'Chirashi saumon avocat',
    tag: 'Bols de riz',
    desc: 'Riz japonais, saumon frais, avocat, sésame grillé et ciboulette.',
  },
  {
    name: 'Donburi bœuf teriyaki',
    tag: 'Bols de riz',
    desc: 'Bœuf sauté, oignons fondants, sauce teriyaki maison sur riz japonais.',
  },
  {
    name: 'Mochis glacés',
    tag: 'Douceurs',
    desc: 'Thé matcha, sésame noir ou fleur de cerisier.',
  },
];

const openSlots = ['12:00 – 14:30', '19:00 – 22:30'];

const hours: { day: string; slots: string[] }[] = [
  { day: 'Lundi', slots: [] },
  { day: 'Mardi', slots: openSlots },
  { day: 'Mercredi', slots: openSlots },
  { day: 'Jeudi', slots: openSlots },
  { day: 'Vendredi', slots: openSlots },
  { day: 'Samedi', slots: openSlots },
  { day: 'Dimanche', slots: openSlots },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <header className="site-header" data-section="header">
        <div className="container header-inner">
          <a className="brand" href="#accueil">
            {/* Le texte alternatif « sola » donne le nom du lien ; le texte visible est masqué aux lecteurs d'écran pour éviter la double lecture. */}
            <Image src={logo} alt="sola" width={44} height={44} priority />
            <span aria-hidden="true">sola</span>
          </a>
          <nav className="nav" aria-label="Navigation principale">
            <ul>
              <li>
                <a href="#menu">La carte</a>
              </li>
              <li>
                <a href="#horaires">Horaires</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="contenu">
        <section className="section hero" id="accueil" data-section="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Restaurant japonais · Claye-Souilly</p>
              <h1 id="hero-title">sola, la cuisine japonaise tout en douceur à Claye-Souilly</h1>
              <p className="lead">
                Sushis frais, bols fumants et petites assiettes à partager, préparés avec soin rue Jean Jaurès. À
                savourer sur place, à emporter ou à commander en ligne.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href={PLATFORM_URL}>
                  Réserver
                </a>
                <a className="btn btn-secondary" href={PLATFORM_URL}>
                  Commander
                </a>
              </div>
              <p className="hero-info">Ouvert du mardi au dimanche, midi et soir.</p>
            </div>
            <div className="art" aria-hidden="true">
              <div className="flower">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="presentation" data-section="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Notre maison</p>
              <h2 id="about-title">Un restaurant japonais intimiste au cœur de Claye-Souilly</h2>
              <p>
                Chez sola, la cuisine japonaise se vit comme un moment de calme. Le riz est vinaigré à la minute, les
                poissons sont tranchés devant vous et les bouillons mijotent longuement pour révéler toute leur
                profondeur.
              </p>
              <p>
                Notre carte reste courte et de saison, pensée pour aller à l&apos;essentiel : des produits frais, des
                gestes précis et des saveurs nettes. Une adresse simple et chaleureuse pour un déjeuner rapide, un dîner
                à deux ou un repas à emporter à Claye-Souilly.
              </p>
            </div>
            <div className="panel">
              <h3>Nos services</h3>
              <ul className="services">
                <li>Service sur place</li>
                <li>Vente à emporter</li>
                <li>Commande en ligne</li>
                <li>Réservation en ligne</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section menu-preview" id="menu" data-section="menu-preview" aria-labelledby="menu-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Aperçu de la carte</p>
              <h2 id="menu-title">Nos spécialités japonaises</h2>
              <p>Quelques incontournables de notre cuisine japonaise, préparés chaque jour à Claye-Souilly.</p>
            </div>
            <ul className="cards">
              {dishes.map((dish) => (
                <li key={dish.name}>
                  <article className="card">
                    <h3>{dish.name}</h3>
                    <p className="tag">{dish.tag}</p>
                    <p className="desc">{dish.desc}</p>
                  </article>
                </li>
              ))}
            </ul>
            <a className="btn btn-secondary" href={PLATFORM_URL}>
              Voir la carte
            </a>
          </div>
        </section>

        <section className="section booking" data-section="order-reserve" aria-labelledby="booking-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sur place ou chez vous</p>
              <h2 id="booking-title">Réserver ou commander chez sola</h2>
              <p>Réservez votre table ou commandez vos plats japonais à emporter en quelques clics.</p>
            </div>
            <div className="booking-grid">
              <article className="card" id="reserver">
                <h3>Réserver une table</h3>
                <p>
                  Choisissez votre jour et votre service, midi ou soir, du mardi au dimanche. Vous préférez parler à
                  quelqu&apos;un ? Appelez-nous.
                </p>
                <div className="card-actions">
                  <a className="btn btn-primary" href={PLATFORM_URL}>
                    Réserver
                  </a>
                  <a className="btn btn-secondary" href="tel:+33776020761">
                    Appeler le 07 76 02 07 61
                  </a>
                </div>
              </article>
              <article className="card" id="commander">
                <h3>Commander en ligne</h3>
                <p>
                  Composez votre commande sur notre carte et récupérez-la au 3 rue Jean Jaurès à l&apos;heure qui vous
                  convient : vos plats sont préparés à la minute.
                </p>
                <p className="desc">Vente à emporter pendant les heures d&apos;ouverture.</p>
                <div className="card-actions">
                  <a className="btn btn-primary" href={PLATFORM_URL}>
                    Commander
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section hours dark" id="horaires" data-section="hours" aria-labelledby="hours-title">
          <div className="container hours-wrap">
            <div className="section-head">
              <p className="eyebrow">Horaires</p>
              <h2 id="hours-title">Horaires d&apos;ouverture</h2>
              <p>
                Notre restaurant japonais de Claye-Souilly vous accueille du mardi au dimanche, le midi et le soir.
                Fermeture le lundi.
              </p>
            </div>
            <div className="hours-box">
              <table>
                <caption className="visually-hidden">Horaires d&apos;ouverture de sola à Claye-Souilly</caption>
                <thead>
                  <tr>
                    <th scope="col">Jour</th>
                    <th scope="col">Horaires</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <th scope="row">{h.day}</th>
                      <td>
                        {h.slots.length === 0 ? (
                          <span className="closed">Fermé</span>
                        ) : (
                          h.slots.map((slot) => (
                            <span className="slot" key={slot}>
                              {slot}
                            </span>
                          ))
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" data-section="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Nous trouver</p>
              <h2 id="contact-title">Venir chez sola à Claye-Souilly</h2>
              <p>
                Une table japonaise rue Jean Jaurès, à Claye-Souilly (Seine-et-Marne). Sur place, à emporter ou en
                commande en ligne.
              </p>
            </div>
            <div className="contact-grid">
              <div className="card">
                <h3>Coordonnées</h3>
                <address>
                  <ul className="contact-list">
                    <li>
                      <span className="label">Adresse</span>3 rue Jean Jaurès
                      <br />
                      77410 Claye-Souilly
                    </li>
                    <li>
                      <span className="label">Téléphone</span>
                      <a href="tel:+33776020761">07 76 02 07 61</a>
                    </li>
                    <li>
                      <span className="label">E-mail</span>
                      <a href="mailto:marinesola348@gmail.com">marinesola348@gmail.com</a>
                    </li>
                  </ul>
                </address>
              </div>
              <div className="card">
                <h3>Bon à savoir</h3>
                <p>Pour le dîner du week-end, pensez à réserver : la salle est intimiste.</p>
                <p className="desc">
                  Les commandes à emporter sont prêtes pendant nos services : du mardi au dimanche, 12:00 – 14:30 et
                  19:00 – 22:30.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer dark" data-section="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <p className="footer-brand">sola</p>
              <p>Restaurant japonais à Claye-Souilly : sur place, à emporter et en commande en ligne.</p>
            </div>
            <div>
              <p className="footer-title">Accès rapide</p>
              <ul className="footer-links">
                <li>
                  <a href="#menu">La carte</a>
                </li>
                <li>
                  <a href={PLATFORM_URL}>Réserver</a>
                </li>
                <li>
                  <a href={PLATFORM_URL}>Commander</a>
                </li>
                <li>
                  <a href="#horaires">Horaires</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-title">Contact</p>
              <address>
                <p>
                  3 rue Jean Jaurès
                  <br />
                  77410 Claye-Souilly
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="tel:+33776020761">07 76 02 07 61</a>
                  </li>
                  <li>
                    <a href="mailto:marinesola348@gmail.com">marinesola348@gmail.com</a>
                  </li>
                </ul>
              </address>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© sola – restaurant japonais, Claye-Souilly</p>
          </div>
        </div>
      </footer>
    </>
  );
}
