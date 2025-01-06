import {
  RiGalleryView2,
  RiAlertLine,
  RiIncreaseDecreaseLine,
  RiRobot2Line,
  RiRadarLine,
  RiWifiFill,
  RiRainyLine,
  RiSpamLine,
  RiShieldLine,
  RiSettings5Line,
} from "react-icons/ri";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-start items-center min-w-24 max-w-24">
              <nav className="rounded-2xl py-10 w-full bg-neutral-950/60 shadow shadow-neutral-700">
                <ul className="flex flex-col items-center gap-8 text-2xl text-neutral-500 ">
                  <li>
                    <a
                      className="transition-all text-[#ff6764] duration-500 hover:text-[#aa403e]"
                      href="#"
                    >
                      <RiGalleryView2 />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiWifiFill />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiRadarLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiIncreaseDecreaseLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiRainyLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiSpamLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiShieldLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiRobot2Line />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiAlertLine />
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-all duration-500 hover:text-white"
                      href="#"
                    >
                      <RiSettings5Line />
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
  )
}
