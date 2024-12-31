import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const listItem = e.target.closest('li');
        if (listItem && listItem.id) {
            changeTheme(listItem.id);
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React</li>
                <li id="angular">Angular</li>
                <li id="vue">Vue</li>
                <li id="rxjs">Rxjs</li>
                <li id="redux">Redux</li>
                <li id="node">Node</li>
                <li id="ngrx">Ngrx</li>
                <li id="javascript">JavaScript</li>
            </ul>
        </div>
    );
};

export default Skills;
