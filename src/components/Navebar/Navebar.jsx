


export default function Navebar({ cartCount, onCartClick }) {
  return (
    <div className="navbar sticky top-0 z-50 rounded-2xl bg-base-100/95 px-2 py-2 shadow-sm backdrop-blur sm:px-5 lg:px-8">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#831C91] bg-clip-text text-transparent sm:text-3xl">
          DigiTols
        </h1>
      </div>
 
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-sm xl:text-base">
          <li><button>Products</button></li>
          <li><button>Features</button></li>
          <li><button>Pricing</button></li>
          <li><button>Testimonials</button></li>
          <li><button>FAQ</button></li>
        </ul>
      </div>

      <div className="navbar-end gap-1.5 sm:gap-2">
        <button
          onClick={onCartClick}
          className="btn btn-ghost btn-circle btn-sm relative sm:btn-md"
          aria-label={`Open cart with ${cartCount} items`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 2h12m-9 4a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
          {cartCount > 0 && (
            <span className="badge badge-primary badge-sm absolute -right-1 -top-1">{cartCount}</span>
          )}
        </button>

        <button className="btn btn-ghost hidden rounded-full sm:inline-flex">Login</button>
        <button className="btn btn-sm rounded-full border-0 text-white bg-linear-to-r from-[#4F39F6] to-[#831C91] sm:btn-md">
          Get Started
        </button>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm sm:btn-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li><button>Products</button></li>
            <li><button>Features</button></li>
            <li><button>Pricing</button></li>
            <li><button>Testimonials</button></li>
            <li><button>FAQ</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
