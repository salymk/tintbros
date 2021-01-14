import React from 'react';

const FAQ = () => (
  <section id="faq">
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="capitalize text-3xl font-extrabold text-gray-900 text-center">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Whats the best thing about Switzerland?
              </dt>
              <dd className="text-base text-gray-500">
                I dont know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                How do you make holy water?
              </dt>
              <dd className="text-base text-gray-500">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd className="text-base text-gray-500">
                Because theyre so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                What do you call someone with no body and no nose?
              </dt>
              <dd className="text-base text-gray-500">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why cant you hear a pterodactyl go to the bathroom?
              </dt>
              <dd className="text-base text-gray-500">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd className="text-base text-gray-500">
                He couldnt see himself doing it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    {/* <!-- Feature section with brand panel --> */}
    <div className="relative mb-20">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1 bg-gray-50" />
        <div className="flex-1" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-400 to-black rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-red-900">
                  Start your free trial today.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-50">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
