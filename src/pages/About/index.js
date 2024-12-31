import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <strong>
                        Hi, I am Sebahattin Ozdemir
                    </strong>
                    <p>
                        I am a Senior Frontend Developer proficient in HTML5, CSS/SCSS, Angular, Vue and React, with a strong background in both full-time roles and contract positions across multiple companies. Driven to innovate and leave my mark on the technologies I develop, I am a passionate self-learner focused on Angular, React, Vue, Node, and Java.
                        <br/> <br/>
                        I actively enhance my skills by undertaking projects like cloning the RxJS and Lodash libraries to deepen my knowledge of reactive programming and design patterns. My approach is grounded in the principle of "Talk is cheap. Show me the code," emphasizing hands-on development and practical application.
                    </p>
                </div>
            </div>
            <Title>
                Areas of Expertise
            </Title>
            <div className="row">
                <div className="column">

                    <p>
                        I have a deep understanding of how JavaScript works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks.
                    </p>
                </div>
            </div>
            <Title>
                Highlights of Qualifications
            </Title>
            <div className="row">
                <div className="column">
                    <ul>
                    <li>
                            Sound knowledge of MVC frameworks
                        </li>
                        <li>
                            Deep understanding of JavaScriptOOP & FP
                        </li>
                        <li>
                            Hungry and eager to learn
                        </li>
                        <li>
                            Ability to learn rapidly
                        </li>
                        <li>
                            Follow emerge technologies
                        </li>
                        <li>
                            Excellent coding and code review experience. Clear structure,standardized naming, strong logic, low code redundancy
                        </li>
                        <li>The ability to analyze complex technical information</li>
                        <li>Can analyze, design and implement frontend structures</li>
                        <li>Detail oriented</li>
                        <li>Excellent problem solver</li>
                        <li>Pixel Perfect Design Implementation</li>
                        <li>Management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
