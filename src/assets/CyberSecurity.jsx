import React from 'react'

const CyberSecurity = () => {
  return (
<>
<div
        className="relative brightness-110 bg-purple-700 bg-blend-multiply w-full h-full bg-cover bg-center  hue-rotate-15"
        style={{ backgroundImage: "url('https://pecb.com/article_docs/images/C9F2E90B86C762E5CFF56618FDE0CC12.png')" }}
      >
      <div className="text-center pt-60 text-4xl text-white font-bold">
          <h1>CyberTrust</h1>
        </div>
        <div className="text-center text-4xl text-white font-bold">
          <h1>
            The Future of <b className="text-purple-700">Cyber Security</b> in your hands.
          </h1>
        </div>
        <div className="text-center  px-10 md:px-56 pt-2 text-white font-bold">
        To empower non-experts User in identifying and understanding potential cyber threats they may encounter, this tool aims to bridge the gap between basic cybersecurity knowledge and active threat diagnosis.
        </div>

        {/* Centering the buttons and image */}
        <section className="mt-6 pt-6 flex mb-6 justify-center items-center">
          <form className="flex justify-center items-center space-x-4">
            <button
              type="button"
              className="text-white shadow-sm shadow-white bg-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Get Started
            </button>


            
          </form>
        </section>

        <section className="max-w-screen-xl  pt-6 mx-auto px-1 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl  transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 3.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 6.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl  transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/image 5.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-2xl transform transition duration-300 hover:scale-105 brightness-125 hue-rotate-15"
                style={{
                  backgroundImage: "url('images/fot.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '200px',
                }}
              ></div>
            </div>
          </div>
    </section>
        </div>
</>
  )
}

export default CyberSecurity