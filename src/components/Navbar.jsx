import dayjs from "dayjs"

import { navIcons, navLinks } from "#constants"

const Navbar = () => {
  return (
    <nav>
      {/* left side navbar */}
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-light tracking-tight uppercase">
          Lawrence's <span className="text-red-600 font-light">CV</span>
        </p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      {/* right side navbar */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:MM A")}</time>
      </div>
    </nav>
  )
}
export default Navbar
