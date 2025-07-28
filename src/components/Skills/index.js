import React, { useContext } from "react";
import "./index.scss";
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
  const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } =
    useContext(ThemeContext);

  function handleMouseEnter(e) {
    const listItem = e.target.closest("li");
    if (listItem && listItem.id) {
      changeTheme(listItem.id);
    }
  }

  return (
    <div className="skills">
      <h6>Skills</h6>
      <ul
        onMouseEnter={stopThemeChangeTimer}
        onMouseLeave={startThemeChangeTimer}
        onMouseOver={handleMouseEnter}
      >
        <li id="react">React</li>
        <li id="nextjs">NextJS</li>
        <li id="zustand">Zustand / Redux</li>
        <li id="vue">Vue</li>
        <li id="nuxtjs">NuxtJS</li>
        <li id="nuxtjs">Vuex / Pinia</li>
        <li id="vitejs">ViteJS</li>
        <li id="angular">Angular</li>
        <li id="ngrx">Ngrx / Ngxs</li>
        <li id="rxjs">Rxjs</li>
        <li id="node">Node / Express / NestJS</li>
        <li id="javascript">JavaScript / TypeScript</li>
      </ul>
    </div>
  );
};

export default Skills;
