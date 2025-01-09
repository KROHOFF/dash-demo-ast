import { useState } from "react";
import {
  RiGalleryView2,
  RiAlertLine,
  RiIncreaseDecreaseLine,
  RiRobot2Line,
  RiRadarLine,
  RiRainyLine,
  RiSpamLine,
  RiShieldLine,
  RiSettings5Line,
  RiExpandLeftLine,
  RiExpandRightLine,
  RiShipLine,
} from "react-icons/ri";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={
        isOpen
          ? "flex flex-col items-end bg-gradient-to-br from-neutral-800 pe-3 py-5 rounded-se-xl"
          : "flex flex-col items-end py-5"
      }
    >
      <button
        className={
          isOpen
            ? "`flex items-center  text-neutral-500 hover:text-white rounded-2xl`"
            : "`flex items-center  text-neutral-500 hover:text-white rounded-2xl`"
        }
        onClick={toggle}
      >
        {isOpen ? <RiExpandLeftLine /> : <RiExpandRightLine />}
      </button>
      <nav className="pt-5">
        <ul className="flex flex-col gap-8 text-2xl text-neutral-500 ps-4 pe-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active flex justify-start items-center gap-2  transition-all duration-500 hover:text-white"
                  : `flex justify-start items-center gap-2  transition-all duration-500 hover:text-[#aa403e]`
              }
              end
            >
              <RiGalleryView2 />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Dashboard
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/biomasa"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiShipLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Biomasa
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/radar"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiRadarLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Clima
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/increase-decrease"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiIncreaseDecreaseLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Seguridad
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rainy"
              className=" flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiRainyLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Sensores IoT
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spam"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiSpamLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Energía
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shield"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiShieldLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Estado de Red
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/robot"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiRobot2Line />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Alertas
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alert"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiAlertLine />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Sub Drone
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="flex items-center gap-2  transition-all duration-500 hover:text-white"
              end
            >
              <RiSettings5Line />
              {isOpen ? (
                <span className="text-xs transition-all duration-500">
                  Jaula Smart
                </span>
              ) : (
                ""
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
