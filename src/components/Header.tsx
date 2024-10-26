import Container from "./Container";
import me from "../assets/images/me.jpg";

const Header = () => {
  return (
    <Container className="px-4 lg:px-0 mt-10">
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 ">
          <a
            className="font-bold   text-sm flex items-center justify-center text-white space-x-2"
            href="/"
          >
            <img
              src={me}
              alt="Marianne de Asis"
              className="rounded-full w-12 h-12"
            />
            <span className="font-inter font-bold">Marianne de Asis</span>
          </a>
          <a className="text-white text-sm relative" href="/about">
            <span className="relative z-10 px-2 py-2 inline-block">About</span>
          </a>
          <a className="text-white text-sm relative" href="/projects">
            <span className="relative z-10 px-2 py-2 inline-block">
              Projects
            </span>
          </a>
          <a className="text-white text-sm relative" href="/contributions">
            <span className="relative z-10 px-2 py-2 inline-block">
              Contributions
            </span>
          </a>
          <a className="text-white text-sm relative" href="/blogs">
            <span className="relative z-10 px-2 py-2 inline-block">Blogs</span>
          </a>
          <a className="text-white text-sm relative" href="/events">
            <span className="relative z-10 px-2 py-2 inline-block">Events</span>
          </a>
        </div>
        <a
          href="/cv.pdf"
          target="__blank"
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 "
        >
          Download CV
        </a>
      </div>
    </Container>
  );
};

export default Header;
