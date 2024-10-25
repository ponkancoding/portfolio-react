import Container from "./Container"
import me from '../assets/images/me.jpg'

const Header = () => {
  return (
    <Container className="px-4 lg:p-0">
      <div className="flex justify-between items-center bg-white rounded-xl my-4 p-4">
        <div className="flex gap-3">
          <img src={me} alt="Marianne de Asis" className="rounded-full w-12 h-12" />
          <div className="flex flex-col">
            <strong className="m-0">Marianne de Asis</strong>
            <span className="text-gray-500">Philippine-based Web Developer</span>
          </div>
        </div>
        <div>
          <ul className="flex gap-6">
            <li className="font-bold">
              <a href="#about">About</a>
            </li>
            <li className="font-bold">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-bold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header