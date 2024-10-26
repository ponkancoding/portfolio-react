import Container from "./components/Container";
import "./stylesheets/main.scss";
import Header from "./components/Header";
import SideAccordion from "./components/SideAccordion";
import { HoverEffect } from "./components/Card";

const workItems = [
  {
    title: "Fullstack HQ",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.",
    role: "Frontend Developer",
    circa: "2019",
    tech: "React, TypeScript, Tailwind CSS",
    logo: "../src/assets/images/fullstackhq.png",
    image: "https://loremflickr.com/600/400",
  },
  {
    title: "Prime Total Solutions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.",
    role: "Frontend Developer",
    circa: "2021",
    tech: "React, TypeScript, Tailwind CSS",
    logo: "https://cdn.svgporn.com/logos/faker.svg",
    image: "https://loremflickr.com/600/401",
  },
  {
    title: "Moustache Republic",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.",
    role: "Frontend Developer",
    circa: "2022",
    tech: "React, TypeScript, Tailwind CSS",
    logo: "../src/assets/images/moustache-rep.svg",
    image: "https://loremflickr.com/600/399",
  },
  {
    title: "Webcoda",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.",
    role: "Frontend Developer",
    circa: "2022",
    tech: "React, TypeScript, Tailwind CSS",
    logo: "../src/assets/images/webcoda.webp",
    image: "https://loremflickr.com/600/399",
  },
];

function App() {
  return (
    <Container>
      <Header />
      <main className="mt-10 md:mt-20">
        <h1 className="max-w-3xl text-5xl font-bold">
          From Concept to Code: Bringing Your Brand’s Story to Life with{" "}
          <span className="text-blue-500">High-Impact Web Design</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          A place where you can witness my caffeinated coding adventures and see
          just how much coffee it takes to fuel my commits. from my first "Hello
          World" to my latest breakthrough, and everything in between.
        </p>
        <SideAccordion workItems={workItems} />
        <HoverEffect items={[{
          title: 'Fullstack HQ',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
          link: 'https://fullstackhq.com',
        }, {
          title: 'Fullstack HQ',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
          link: 'https://fullstackhq.com',
        }, {
          title: 'Fullstack HQ',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
          link: 'https://fullstackhq.com',
        }]} />
      </main>
    </Container>
  );
}

export default App;
