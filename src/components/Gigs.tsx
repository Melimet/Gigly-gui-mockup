import "../styles/gigs.css"
import image from "../plumber.webp"

function Gigs() {
  const gigs = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Dog walker",
    "Babysitter",
    "Cleaner",
    "Barber",
    "Hairdresser",
    "Painter",
    "Gardener",
    "Tutor",
    "Photographer",

  ]

  return (
    <main>
      <h2>Professionals by category</h2>
      <ul className="gigGrid">
        {gigs.map((gig) => (
          <li className="gig" key={gig}>
            {gig}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Gigs
