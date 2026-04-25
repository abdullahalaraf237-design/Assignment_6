import bannerImage from '../../assets/banner.png'
 
export default function Banar() {
  return (
    <div className='flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12'>
      <div className="w-full px-2 sm:px-4 lg:w-1/2 lg:px-6">
        <h1 className='text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-left lg:text-6xl xl:text-7xl'>
          <span>Supercharge Your</span> <span>Digital Workflow</span>
        </h1>

        <p className='mt-5 text-center text-sm leading-7 text-gray-600 sm:text-base lg:text-left'>
          Access premium AI tools, design assets, templates, and productivity software all in one place.
          Start creating faster today.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
          <button className='btn btn-sm rounded-full border-0 text-white bg-linear-to-r from-[#4F39F6] to-[#831C91] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 sm:btn-md'>
            Explore Products
          </button>

          <button className='btn btn-sm rounded-full border-0 text-white bg-linear-to-r from-[#4F39F6] to-[#831C91] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 sm:btn-md'>
            Watch Demo
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img src={bannerImage} alt="Banner" className='mx-auto w-full max-w-md sm:max-w-xl lg:max-w-2xl' />
        </div>
    </div>
  )
}
