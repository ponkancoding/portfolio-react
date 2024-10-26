import React from "react";

type Props = {
  workItems: {
    title: string;
    content: string;
    role: string;
    circa: string;
    tech: string;
    logo: string;
    image: string;
  }[];
};

const SideAccordion = (props: Props) => {

  const { workItems } = props;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-40">
        Work Experience
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
        I switch a lot of companies. It's mostly about the culture.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-4xl mx-auto">
        <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible">
          {
            workItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 items-start md:items-center"
              >
                <div className="relative my-2">
                  <button className="px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group">
                    <div className="bg-red-500 p-1 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                      <img
                        alt="Apple"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        className=" transition duration-200"
                        srcSet={item.logo}
                        src={item.logo}
                      />
                    </div>
                    <span>{item.title}</span>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="md:pl-10  flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold text-zinc-100">
                Front-end Web Developer{" "}
                <span className="text-cyan-500">@ Fullstack HQ</span>
              </h1>
              <div className="text-zinc-400 text-sm tracking-widest">
                Jan 2021 - Jun 2021
              </div>
              <p className="text-zinc-400 text-sm">Mountain View, CA</p>
              <div>
                <div className="flex flex-row space-x-2 items-start my-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Worked on the Google Maps team
                  </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Helped people get lost from point A to point B in shortest
                    time
                  </span>
                </div>
                <div className="flex flex-row space-x-2 items-start my-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  <span className="text-zinc-400 text-sm">
                    Worked directly with Dijkstra to build the shortest path
                    algorithm - but better.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideAccordion;
