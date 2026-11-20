import Nav from "@/components/Nav";
import Disc from "@/components/Disc";
import Reveal from "@/components/Reveal";
import BlurLink from "@/components/BlurLink";
import SiteFooter from "@/components/SiteFooter";
import FilmGallery from "@/components/FilmGallery";

const meals = [
  { number: "01", title: "The midnight spaghetti", film: "Goodfellas · 1990", detail: "Garlic, oil, a little too much red pepper.", color: "tomato" },
  { number: "02", title: "A very nice fish", film: "The Grand Budapest Hotel · 2014", detail: "Trout, lemon, and a perfectly pink cake.", color: "pink" },
  { number: "03", title: "The last slice of pie", film: "Twin Peaks: Fire Walk with Me · 1992", detail: "Cherry, coffee, and one more cup.", color: "blue" },
];
const films = [
  { no: "A", title: "In the mood for love", year: "2000", tag: "SLOW BURN", color: "film-red" },
  { no: "B", title: "The Grand Budapest Hotel", year: "2014", tag: "SWEET / SAVOURY", color: "film-pink" },
  { no: "C", title: "Ratatouille", year: "2007", tag: "THE COMFORT FILM", color: "film-orange" },
];

export default function Home() {
  return <main>
    <Nav />
    <div className="hero-wrap">
      <div className="hero-grain" aria-hidden="true"/>
      <Disc className="hero-disc" />
      <div className="hero">
        <h1>Good food.<br/><em>Great</em> movie.</h1>
        <p className="hero-copy">A dinner party directed by the film. Pick what you’re watching, and we’ll make the food part of the story.</p>
        <div className="hero-actions"><a className="button button-dark" href="#menu">Find your menu <span>↗</span></a><a className="text-link" href="#how">How it works <span>↗</span></a></div>
      </div>
      <div className="hero-side-note">SOUND ON<br/>STOVE ON</div>
    </div>

    <section className="intro-section section-pad" id="how">
      <Reveal className="intro-left"><h2>Let the movie<br/>set the <em>table.</em></h2></Reveal>
      <Reveal className="intro-right"><p className="intro-lede">Some films make you hungry.</p><p>We pair a film with a menu from its world, timed to the scenes and made for sharing.</p><a className="underlined-link" href="#menu">Take a look around <span>↗</span></a></Reveal>
    </section>

    <section className="menu-section section-pad" id="menu">
      <Reveal className="section-heading"><div><h2>Scenes you can <em>taste.</em></h2></div><p>Three little reasons to<br/>stay through the credits.</p></Reveal>
      <div className="meal-list">{meals.map((meal, index) => <div className="meal-row-reveal" key={meal.number}><a href="#menu" role="button" aria-label={`Preview ${meal.title}`} className={`meal-row meal-${meal.color}`}>
        <div className="meal-number">{meal.number}<span> / 03</span></div>
        <div className={`meal-art art-${meal.color}`}><div className="art-disc"/><div className="art-orbit"/><div className="art-label">{index === 0 ? "PASTA" : index === 1 ? "DINNER" : "DESSERT"}</div><div className="art-shape"/></div>
        <Reveal className="meal-info"><h3>{meal.title}</h3><p>{meal.detail}</p><span className="meal-film">{meal.film}</span></Reveal>
        <span className="row-arrow">↗</span>
      </a></div>)}</div>
      <div className="menu-cta"><span>THE MENU CHANGES WITH THE MOOD.</span><BlurLink href="/contact" className="button button-outline">Make it a movie night <span>↗</span></BlurLink></div>
    </section>

    <section className="film-section section-pad" id="movies">
      <Reveal className="section-heading film-heading"><div><h2>Now showing <em>at home.</em></h2></div><p>A few films we think<br/>deserve a second course.</p></Reveal>
      <FilmGallery films={films} />
      <div className="film-cta"><button type="button" className="button button-outline">Discover more films <span>↗</span></button></div>
    </section>

    <SiteFooter />
  </main>;
}
