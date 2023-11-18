import React from "react";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

const Contact = () => {
  return (
    <section className="py-2 overflow-hidden w-full ">
      <h1 className={title({ color: "grad1" })}>
        Don&apos;t hesitate to contact me...
      </h1>
      <h1 className={subtitle({})}>I would love to collaborate with you</h1>
      <div className="flex flex-row">
        <div className="w-full justify-center items-center   px-4 mb-20 lg:mb-0">
          <div className="max-w-lg lg:max-w-xl lg:ml-auto">
            <h4 className="text-xl font-bold text-gray-100 mb-8">
              Drop me a text
            </h4>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="bfc689bb-11be-43ff-9764-e8ecf0b6a523"
              />

              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-semibold"
                      htmlFor="full-name"
                    >
                      <span>Name</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="text"
                      placeholder="Enter Name here"
                      id="full-name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-semibold"
                      htmlFor="email"
                    >
                      <span>Email</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="email"
                      name="email"
                      placeholder="Enter your E-mail here"
                      id="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-9">
                <label
                  className="block mb-1.5 text-sm font-semibold"
                  htmlFor="message"
                >
                  <span>Message</span>
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="w-full h-12 py-3 px-4 resize-none text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  placeholder="What you want to say..."
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="h-captcha m-1 " data-captcha="true"></div>
              <button
                className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden m-10"
                type="submit"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Send</span>
              </button>
            </form>
            <script
              src="https://web3forms.com/client/script.js"
              async
              defer
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
