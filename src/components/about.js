import React from 'react';

const About = () => (
  <div>
    <div className="bg-white pt-8 lg:pt-24">
      <div className="pb-16 bg-gray-900 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-12 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1548984120-2d55e48b40bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <p className="mt-6 text-lg md:text-2xl text-white">
                    Meet Idris and his little brother Umar, the ones bringing
                    the most tinted tinting eva. Sed urna nulla vitae laoreet
                    augue. Amet feugiat est integer dolor auctor adipiscing nunc
                    urna, sit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                    feugiat est integer dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
