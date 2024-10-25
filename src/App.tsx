import Container from './components/Container'
import './App.scss'
import './stylesheets/main.scss'
import Header from './components/Header'
import SideAccordion from './components/SideAccordion'
import Divider from './components/Divider'

const workItems = [
  {
    title: 'Project 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
    role: 'Frontend Developer',
    circa: '2019',
    tech: 'React, TypeScript, Tailwind CSS',
    logo: 'https://cdn.svgporn.com/logos/react.svg',
    image: 'https://loremflickr.com/600/400'
  },
  {
    title: 'Project 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
    role: 'Frontend Developer',
    circa: '2021',
    tech: 'React, TypeScript, Tailwind CSS',
    logo: 'https://cdn.svgporn.com/logos/faker.svg',
    image: 'https://loremflickr.com/600/401'
  },
  {
    title: 'Project 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nunc nec dolor bibendum eleifend. Sed nec nunc nec dolor bibendum eleifend.',
    role: 'Frontend Developer',
    circa: '2022',
    tech: 'React, TypeScript, Tailwind CSS',
    logo: 'https://cdn.svgporn.com/logos/typesense-icon.svg',
    image: 'https://loremflickr.com/600/399'
  }
]

function App() {
  return (
    <Container>
      <Header />
      <main className='mt-[120px]'>
        <h1 className='text-6xl text-center mb-2'>I'm Marianne, <span className='text-gray-500'>a Frontend Web Developer.</span></h1>
        <p className='w-[80%] text-lg text-center mx-auto'>I specialize in crafting clean, responsive, and visually appealing websites with a focus on usability and performance. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I bring ideas to life on the web by transforming complex designs into interactive, user-friendly interfaces.</p>
        <Divider className='my-8'/>
        <p className='text-xl text-center mt-8'>Explore my work, and let's create something exceptional together!</p>
        <SideAccordion items={workItems} />
        <Divider className='my-16'/>
        <h2 className='text-5xl text-center mb-4'>Work Experience</h2>
        <p className='w-[80%] text-lg text-center mx-auto'>I've had the privilege of working with diverse companies and clients worldwide, bringing a wide range of websites and web apps to life. From e-commerce to tech startups, my projects span various niches, allowing me to deliver tailored, responsive, and engaging user experiences across different industries.</p>
        <p className='text-4xl font-bold  text-center my-8'>In progress...</p>
        <Divider className='my-16'/>
      </main>
    </Container>
  )
}

export default App
