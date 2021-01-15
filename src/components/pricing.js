import React from 'react';
import CarbonPrice from './carbon-price';
import CeramicTint from './ceramic-tint';

const Pricing = () => (
  <section id="prices">
    {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Pricing
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              The right price for you, whatever you drive
            </p>
            <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <CarbonPrice />
              <CeramicTint />
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-red-100 text-red-600"
                      id="tier-standard"
                    >
                      Ceramic
                    </h3>
                  </div>
                  <div className="flex justify-between">
                    <div className="mt-4 mr-3 flex flex-col items-baseline text-6xl font-extrabold text-black">
                      $130
                      <span className="ml-1 mt-2 text-2xl font-medium text-gray-500">
                        2-door
                      </span>
                    </div>
                    <div className="mt-4 flex flex-col items-baseline text-6xl font-extrabold text-black">
                      $260
                      <span className="ml-1 mt-2 text-2xl font-medium text-gray-500">
                        4-door
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Pariatur quod similique
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Sapiente libero doloribus modi nostrum
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Vel ipsa esse repudiandae excepturi
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Itaque cupiditate adipisci quibusdam
                      </p>
                    </li>
                  </ul>
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
