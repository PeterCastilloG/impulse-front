import { SibeBarOptions } from "@/shared/components/sidebar/sidebarOptions";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { clsx } from "@/shared/lib/clsx";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
  const [showSidenab, setShowSidenab] = useState(true);
  const [subMenuShow, setSubMenuShow] = useState(0);

  const handleToogle = () => {
    setShowSidenab(!showSidenab);
  };

  const handleToogleSubMenu = (index: number) => {
    setSubMenuShow(subMenuShow === index ? 0 : index);
  };
  return (
    <div className={clsx(styles.container, showSidenab && styles.show)}>
      <div className={clsx(styles.sidebar, !showSidenab && styles.noshow)}>
        <Link href={"/challenge"} className={styles.logo} prefetch={false}>
          <Image src={logo} alt="Impulse World" />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 211 2"
          fill="none"
        >
          <path d="M0 1L211 1" stroke="url(#paint0_linear_1934_5072)" />
          <defs>
            <linearGradient
              id="paint0_linear_1934_5072"
              x1="0"
              y1="1"
              x2="208.965"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0E1E2" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E0E1E2" />
              <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.options}>
          {SibeBarOptions.map((item, index) => (
            <div className={styles.option} key={item.name}>
              {
                {
                  1: (
                    <Link
                      href={item.route}
                      className={styles.route}
                      prefetch={false}
                    >
                      {item.icon} {item.name}
                    </Link>
                  ),
                  2: (
                    <div className={styles.subroutes}>
                      <div
                        className={styles.title}
                        onClick={() => handleToogleSubMenu(index)}
                      >
                        <span>
                          {item.icon} {item.name}
                        </span>
                        <IoIosArrowDown
                          className={clsx(
                            subMenuShow === index && styles.rotate
                          )}
                        />
                      </div>
                      <div
                        className={clsx(
                          styles.subs,
                          subMenuShow === index && styles.show
                        )}
                      >
                        {item.subRoutes?.map((item) => (
                          <Link
                            href={item.route}
                            key={item.route}
                            prefetch={false}
                          >
                            <span>{item.icon}</span> <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ),
                }[item.subRoutes ? 2 : 1]
              }
            </div>
          ))}
        </div>
        <div className={styles.extra}>
          <span>Conoce</span>
          <p>Nuestrar nuevas modalidades para fase 1</p>
          <Link href={"/challenge"} prefetch={false}>
            Ver Más
          </Link>
        </div>
      </div>
      <span onClick={handleToogle} className={styles.close}>
        <IoMdClose />
      </span>
      <span onClick={handleToogle} className={styles.menu}>
        <AiOutlineMenu />
      </span>
    </div>
  );
}
