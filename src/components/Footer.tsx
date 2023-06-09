import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

export const Footer = () => (
  <footer className="p-10 footer bg-neutral text-neutral-content lg:justify-around">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 256 256"
      >
        <title>iconfu</title>
        <path
          d="M128 7.11l7.39 7.35.17 226.64-7.56 7.79a120.89 120.89 0 0 1 0-241.78z"
          fill="#eb407a"
        />
        <path d="M128 7.11a120.89 120.89 0 1 1 0 241.78z" fill="#d71a60" />
        <path
          d="M128 256a128 128 0 0 1 0-256l3 2.67v8.41l-3 3.14-28.44 14.22H78.22v7.12h21.34l10.15 5.07-67 44.7v78.23L56.89 173v-66.33l49.78-28.45H128l3-2.95V17.19l-3-3a113.78 113.78 0 0 0-21.65 225.49l-6.18-40.6L128 213l3 3.61v35.92zm-42.83-77.1l7.11-7.11 35.56-7.11 3.14 3.06V183l-3 3H99.39l-14.22 35.57zm-6.95-43.79h42.67l-7.11 14.22-28.45-7.11zm7.11-21.33h28.45l7.11 14.22-46.54-.42L64 113.78v-7.11z"
          fill="#fff"
        />
        <path
          d="M128 0a128 128 0 1 1 0 256v-43l.61.3 27.83-14.22-6.76 40.6A113.79 113.79 0 0 0 128 14.22v64h21.33l49.78 28.45V173l14.22-9.48V85.33l-67-44.7 10.15-5.07h21.34v-7.12h-21.38L128 14.22zm0 164.71V186h28.28l14.22 35.56V178.9l-7.11-7.11zm7.11-29.6h42.67l-7.11 7.11-28.45 7.11zm35.56-21.33h-28.45L135.11 128l45.9-.42 11-13.8v-7.11z"
          fill="#ccc"
        />
      </svg>
      <p>
        © 2023 Głos Włocławianina
        <br />
        Wszystkie prawa zastrzeżone.
      </p>
    </div>
    <div>
      <span className="footer-title">Social media</span>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.facebook.com/gloswloclawianina/" target="_blank">
          <FaFacebookSquare className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/gloswloclawianina/?hl=pl"
          target="_blank"
        >
          <RiInstagramFill className="w-8 h-8" />
        </a>
      </div>
    </div>
  </footer>
)
