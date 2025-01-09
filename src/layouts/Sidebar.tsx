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
  RiListUnordered,
  RiShipLine,
  RiLogoutCircleLine,
} from "react-icons/ri";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`flex flex-col items-end py-5 transition-all duration-500 ease-in-out ${
        isOpen
          ? "w-40 opacity-100 bg-gradient-to-br from-neutral-800 pe-3 rounded-se-xl"
          : "w-20 opacity-50"
      }`}
    >
      <button
        className="flex items-center text-neutral-500 hover:text-white rounded-2xl"
        onClick={toggle}
      >
        {isOpen ? <RiExpandLeftLine /> : <RiListUnordered />}
      </button>
      <nav className="pt-5">
        <ul className="flex flex-col gap-8 text-2xl text-neutral-500 ps-4 pe-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active flex justify-start items-center gap-2 transition-all duration-500 hover:text-white"
                  : "flex justify-start items-center gap-2 transition-all duration-500 hover:text-[#aa403e]"
              }
              end
            >
              <RiGalleryView2 />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Dashboard
                </span>
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
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Biomasa
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/radar"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiRainyLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Clima
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/seguridad"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiShieldLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Seguridad
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rainy"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiRadarLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Sensores IoT
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spam"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiSpamLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Energía
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shield"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiIncreaseDecreaseLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Estado de Red
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/robot"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiRobot2Line />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Alertas
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alert"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiAlertLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Sub Drone
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="flex items-center gap-2 transition-all duration-500 hover:text-white"
              end
            >
              <RiLogoutCircleLine />
              {isOpen && (
                <span className={`text-xs transition-all duration-300 animate-slide-in-left`}>
                  Cerrar Sesión
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
