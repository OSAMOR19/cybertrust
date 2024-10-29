import React from 'react'

const Keyfeatures = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-purple-700 to-gray-900 pt-6 pb-12">
        <h1 className="text-5xl font-bold text-center text-white mb-10">About Us</h1>
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="bg-white bg-opacity-90 shadow-lg border border-gray-200 p-8 rounded-lg transform transition duration-300 hover:shadow-xl">
            <p className="text-xl text-gray-700 leading-relaxed">
              Our goal is to empower non-experts, everyday citizens, to identify and understand potential cyber threats they may encounter. This tool aims to bridge the gap between basic cybersecurity awareness and active threat diagnosis.
            </p>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Today, many individuals are aware of standard online safety practices, such as avoiding suspicious links or updating passwords. However, they often lack the tools needed to interpret the signs of a cyberattack or recognize when they’re being targeted.
            </p>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              This app provides a practical, user-friendly solution that goes beyond surface-level advice. It helps users understand the nature, intent, and risk level of various cyber threats. Designed to be intuitive, it guides users through potential signs of an attack with clear, relatable language and interactive prompts.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Keyfeatures
