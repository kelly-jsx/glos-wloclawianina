import Link from 'next/link'
import { ImSearch } from 'react-icons/im'
import { FaRandom } from 'react-icons/fa'

export const Header = () => {
  const navOptions = [
    {
      name: 'O Portalu',
      link: '/',
    },
    {
      name: 'Teksty',
      link: '/posty',
      categories: [
        {
          name: 'Historia',
          link: '/historia',
        },
        {
          name: 'Przyroda',
          link: '/przyroda',
        },
        {
          name: 'Turystyka',
          link: '/turystyka',
        },
        {
          name: 'Kultura i sport',
          link: '/kulturasport',
        },
        {
          name: 'Sprawy lokalne',
          link: '/sprawy-lokalne',
        },
      ],
    },
    {
      name: 'Galeria',
      link: '/galeria',
    },
    {
      name: 'Quizy',
      link: '/about',
    },
    {
      name: 'Kontakt',
      link: '/about',
    },
  ]

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
          >
            {navOptions.map((navOption) => {
              return navOption.categories ? (
                <li tabIndex={0}>
                  <a className="justify-between">
                    {navOption.name}
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-200">
                    {navOption.categories.map((category) => (
                      <li key={category.name}>
                        <Link href={category.link}>
                          <p className="text-base-500">{category.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={navOption.name}>
                  <Link href={navOption.link}>
                    <span className="font-bold text-base-600">
                      {navOption.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">Głos Włocławianina</a>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="px-1 menu menu-horizontal">
          {navOptions.map((navOption) => {
            return navOption.categories ? (
              <li tabIndex={0}>
                <a>
                  {navOption.name}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-200">
                  {navOption.categories.map((category) => (
                    <li key={category.name}>
                      <Link href={category.link}>
                        <p>{category.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={navOption.name}>
                <Link href={navOption.link}>
                  <span>{navOption.name}</span>
                </Link>
              </li>
            )
          })}
          <button className="btn btn-square btn-ghost">
            <FaRandom className="w-5 h-5" />
          </button>
          <button className="btn btn-square btn-ghost">
            <ImSearch className="w-5 h-5" />
          </button>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <button className="btn btn-square btn-ghost">
          <FaRandom className="w-5 h-5" />
        </button>
        <button className="btn btn-square btn-ghost">
          <ImSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
