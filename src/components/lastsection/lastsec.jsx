import React from 'react'

export default function Lastsec() {
  return (
    <footer
      className='mt-12 rounded-2xl px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12'
      style={{ backgroundColor: '#101727' }}
    >
      <div className='grid gap-8 sm:gap-10 md:grid-cols-5'>
        <div className='text-center md:col-span-2 md:text-left'>
          <h3 className='text-2xl font-bold sm:text-3xl'>Digitools</h3>
          <p className='mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300 md:mx-0'>
            Premium digital tools for creators, professionals, and businesses. Work smarter with our
            suite of powerful tools.
          </p>
        </div>

        <div className='text-center md:text-left'>
          <h4 className='text-lg font-semibold'>Product</h4>
          <ul className='mt-3 space-y-2 text-sm text-slate-300 sm:mt-4'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div className='text-center md:text-left'>
          <h4 className='text-lg font-semibold'>Company</h4>
          <ul className='mt-3 space-y-2 text-sm text-slate-300 sm:mt-4'>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='text-center md:text-left'>
          <h4 className='text-lg font-semibold'>Resources</h4>
          <ul className='mt-3 space-y-2 text-sm text-slate-300 sm:mt-4'>
            <li>Documentation</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Social Links</li>
          </ul>
        </div>
      </div>

      <div className='mt-8 border-t border-slate-700 pt-5 text-sm text-slate-300 sm:mt-10 sm:pt-6'>
        <div className='flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left'>
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
