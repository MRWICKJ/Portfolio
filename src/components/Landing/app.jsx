import React, { useState } from "react";
import image from "../../assets/img.png";
import { LuMessageCircle } from "react-icons/lu";

const Landing = () => {
  const [expanded, setExpanded] = useState(false);
  const [result, setResult] = useState(""); // Manage form result state here

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8aeb16a9-b1b1-46a2-a5be-a68da788be36");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#0a0a0a] flex items-center justify-center">
      <section className="relative w-full h-full overflow-hidden">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl h-full flex items-center">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            {/* Text Content */}
            <div className="text-center lg:text-left mt-12">
              <h1 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-white">Heyy, </span>Shubhendu Halder{" "}
                <span className="text-white">Here!</span>
              </h1>
              <p className="mt-2 text-base sm:text-lg font-normal text-gray-300 sm:mt-4 lg:text-xl xl:text-base">
                I am a passionate software developer with a strong background in Python for backend systems, Android app development, and cutting-edge web technologies. I thrive on building efficient solutions that solve real-world problems.
              </p>

              {/* Form Section */}
              <form onSubmit={onSubmit} className="relative mt-6 rounded-full sm:mt-8">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6 text-white text-lg">
                      <LuMessageCircle/>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Let's Chat!"
                      className="block w-full py-3 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-4 lg:py-5 "
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="block w-full py-3 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-4 lg:py-5 "
                    required
                  />
                </div>
                <div className="mt-5 ml-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-4 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full sm:w-auto hover:bg-gray-200"
                  >
                    Say hello
                  </button>
                </div>
              </form>
              {/* Form Result */}
              <span className="block mt-4 text-gray-300">{result}</span>

              {/* Additional Content */}
              <div className="mt-5 sm:mt-12">
                <p className="text-base sm:text-lg lg:text-lg font-normal text-gray-300">
                  Crafting seamless mobile, web, and backend solutions with a passion.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: "blur(64px)" }}
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#gradient-background)"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-background"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "var(--color-cyan-500)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "var(--color-purple-500)" }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-30"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img
                className="relative max-w-xs mx-auto lg:max-w-md rounded-full"
                src={image}
                alt="Aman Jha"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
