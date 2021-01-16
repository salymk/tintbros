/* eslint-disable */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          contact {
            to
            title
            subtitle
            address {
              street
              city
            }
            phone {
              number
              icon {
                altText
                sourceUrl
              }
            }
            email {
              email
              icon {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const {
    to,
    title,
    subtitle,
    address,
    phone,
    email,
  } = data.wpPage.sections.contact;

  return (
    <section>
      <div id={to} className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900" />
        </div>
        <div className="relative max-w-4xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-100">{subtitle}</p>
              <dl className="mt-8 text-base text-gray-100">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>{address.street}</p>
                    <p>{address.city}</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <img
                      className="h-6 w-6"
                      src={phone.icon.sourceUrl}
                      alt={phone.icon.altText}
                    />
                    <span className="ml-3"> {phone.number}</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <img
                      className="h-6 w-6"
                      src={email.icon.sourceUrl}
                      alt={email.icon.altText}
                    />
                    <span className="ml-3"> {email.email} </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div className="flex">
                <div className="mr-8">
                  <span className="text-gray-900">Tint Type</span>
                  <div className="mt-2 flex flex-col">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="tintType"
                        value="carbon"
                      />
                      <span className="ml-2">Carbon</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="tintType"
                        value="ceramic"
                      />
                      <span className="ml-2">Ceramic</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="text-gray-900">Car Doors</span>
                  <div className="mt-2 flex flex-col">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="doorAmount"
                        value="2 door"
                      />
                      <span className="ml-2">2 door</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="doorAmount"
                        value="4 door"
                      />
                      <span className="ml-2">4 door</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
