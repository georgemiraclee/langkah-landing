import Image from "next/image";

const Video = () => {
  return (
    <section
      id="Video"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0 text-center mx-auto">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Langkah Akan Terus
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                Membantu orang tua untuk melakukan deteksi dini masalah
                  perkembangan anak sebagai bentuk dukungan terhadap Sustainable
                  Development Goals yaitu Good Health and Well-Being.
                  Membantu pemerintah untuk mengentaskan isu perkembangan terutama
                  perkembangan kognitif anak dan stunting. 
                </p>
                <div className="mb-10 relative w-full overflow-hidden pb-[56.25%] h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/RH9zOxSGoHg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <span className="absolute left-0 top-0 -z-10">
                <svg
                  width="106"
                  height="144"
                  viewBox="0 0 106 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.1"
                    x="-67"
                    y="47.127"
                    width="113.378"
                    height="131.304"
                    transform="rotate(-42.8643 -67 47.127)"
                    fill="url(#paint0_linear_1416_214)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1416_214"
                      x1="-10.3111"
                      y1="47.127"
                      x2="-10.3111"
                      y2="178.431"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute right-0 top-0 -z-10">
                <svg
                  width="130"
                  height="97"
                  viewBox="0 0 130 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.1"
                    x="0.86792"
                    y="-6.67725"
                    width="155.563"
                    height="140.614"
                    transform="rotate(-42.8643 0.86792 -6.67725)"
                    fill="url(#paint0_linear_1416_215)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1416_215"
                      x1="78.6495"
                      y1="-6.67725"
                      x2="78.6495"
                      y2="133.937"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 -z-10">
                <svg
                  width="175"
                  height="104"
                  viewBox="0 0 175 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.1"
                    x="175.011"
                    y="108.611"
                    width="101.246"
                    height="148.179"
                    transform="rotate(137.136 175.011 108.611)"
                    fill="url(#paint0_linear_1416_216)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1416_216"
                      x1="225.634"
                      y1="108.611"
                      x2="225.634"
                      y2="256.79"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
