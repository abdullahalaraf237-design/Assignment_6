import React from 'react'
import accountImage from '../../assets/user.png'
import productsImage from '../../assets/package.png'
import createImage from '../../assets/rocket.png'

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    image: accountImage,
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    image: productsImage,
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    image: createImage,
  },
]

export default function Seccird() {
  return (
    <section className='mx-auto mt-16 max-w-5xl px-4 sm:mt-20'>
      <div className='mb-8 text-center sm:mb-10'>
        <h2 className='mt-3 text-2xl font-bold text-slate-900 sm:text-4xl'>
          Get Started in 3 Steps
        </h2>
        <p className='mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-lg'>
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className='grid gap-5 md:grid-cols-3'>
        {steps.map((step) => (
          <article
            key={step.id}
            className='relative flex h-full flex-col items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 pt-14 shadow-[0_18px_50px_rgba(15,23,42,0.08)]'
          >
            <div className='absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#831C91] text-sm font-bold text-white shadow-lg'>
              {step.id.slice(-1)}
            </div>

            <div className='flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-100 sm:h-24 sm:w-24'>
              <img
                src={step.image}
                alt={step.title}
                className='h-12 w-12 object-contain sm:h-14 sm:w-14'
              />
            </div>

            <div className='flex-1 text-center'>
              <h3 className='mt-2 text-xl font-bold text-slate-900 sm:text-2xl'>{step.title}</h3>
              <p className='mt-2 text-base leading-7 text-slate-600'>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
