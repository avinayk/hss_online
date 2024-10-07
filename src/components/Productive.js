import React from "react";

export default function Productive() {
  return (
    <div>
      <section className="d-block productive py-5 bg-black">
        <div className="container-xxl">
          <div className="d-flex flex-column py-5 justify-content-center align-items-md-center gap-0 pro_width">
            <h4>Please share the tool to inspire more productive people!</h4>
            <p>how can you thank us ? spread the word!</p>
            <div className="r-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="175"
                viewBox="0 0 98 175"
                fill="none"
              >
                <path
                  d="M97.5 0H54L0 174.487H97.5V0Z"
                  fill="url(#paint0_linear_178_117)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_178_117"
                    x1="48.75"
                    y1="0"
                    x2="48.75"
                    y2="174.487"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2A2979" />
                    <stop offset="1" stop-color="#4D4CDF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="r-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="174"
                viewBox="0 0 112 174"
                fill="none"
              >
                <path
                  d="M0 0H112L46.5 174H0V0Z"
                  fill="url(#paint0_linear_178_116)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_178_116"
                    x1="56"
                    y1="0"
                    x2="56"
                    y2="174"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2A2979" />
                    <stop offset="1" stop-color="#4D4CDF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
