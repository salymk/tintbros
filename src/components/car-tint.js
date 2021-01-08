import React from 'react';

const CarTint = () => (
  <div id="services" className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Automotive Tint
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        <div className="flex">
          {/* <!-- Heroicon name: check --> */}
          <svg
            className="flex-shrink-0 h-6 w-6 text-green-500"
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
          <div className="ml-3">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Invite team members
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est,
              molestie blandit quis ac. Lacus.
            </dd>
          </div>
        </div>

        <div className="flex">
          {/* <!-- Heroicon name: check --> */}
          <svg
            className="flex-shrink-0 h-6 w-6 text-green-500"
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
          <div className="ml-3">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis.
              Nibh urna non parturient.
            </dd>
          </div>
        </div>

        <div className="flex">
          {/* <!-- Heroicon name: check --> */}
          <svg
            className="flex-shrink-0 h-6 w-6 text-green-500"
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
          <div className="ml-3">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              List view
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Etiam cras augue ornare pretium sit malesuada morbi orci,
              venenatis. Dictum lacus.
            </dd>
          </div>
        </div>

        <div className="flex">
          {/* <!-- Heroicon name: check --> */}
          <svg
            className="flex-shrink-0 h-6 w-6 text-green-500"
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
          <div className="ml-3">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Boards
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Interdum quam pulvinar turpis tortor, egestas quis diam amet,
              natoque. Mauris sagittis.
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
);

export default CarTint;
