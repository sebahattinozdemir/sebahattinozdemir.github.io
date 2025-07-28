import React from "react";
import "./index.scss";
import Title from "../common/Title";

const About = () => {
  return (
    <div className="page" id="about">
      <Title>About Me</Title>
      <div className="row">
        <div className="column">
          <strong>Hi, I am Sebahattin Ozdemir</strong>
          <p>
            Senior Software Engineer with 9+ years of commercial experience
            building fast, scalable, and maintainable web apps.
            <br /> <br />
            Delivering frontend architecture and development services for
            companies in fintech, telecom, travel, and enterprise SaaS.
            <br /> <br />
            Specialized in modern frontend frameworks like Angular, React,
            Next.js and Vue, Nuxt — leading refactors, scaling design systems,
            and rescuing legacy codebases.
            <br /> <br />
            From crafting pixel-perfect UI to mentoring engineers and leading
            teams, I turn product vision into shipped reality.
            <br /> <br />
            Let's build something high-impact.
          </p>
        </div>
      </div>
      <Title>Technical Expertise</Title>
      <div className="row">
        <div className="column">
          <p>
            <strong>🧠 Languages</strong>
            <br />• JavaScript • TypeScript • Java
          </p>
          <p>
            <strong>🧱 Frameworks & Libraries</strong>
            <br />• Angular • React • Next.js • Remix • Vue.js • Nuxt • TanStack
            • NodeJS • Spring Boot
          </p>
          <p>
            <strong>📦 State Management Libraries</strong>
            <br />• NgRx (Angular) • Signals (Angular 17+) • Ngxs (Angular) •
            Zustand (React) • Redux • Context API (React) • Mobx (React) • Vuex
            (Vue 2/3) • Pinia (Vue3)
          </p>
          <p>
            <strong>🎨 UI Frameworks / Design Systems</strong>
            <br />• CSS, SCSS • Bootstrap • Tailwind CSS • Primeng • Devexpress
            • Angular Material • Shadcn/ui • MUI
          </p>
          <p>
            <strong>⚙️ CI/CD & DevOps</strong>
            <br />• GitHub Actions • Jenkins • Gitlab CI/CD
          </p>
        </div>
      </div>
      <Title>Core Strengths</Title>
      <div className="row">
        <div className="column">
          <ul>
            <li>
              Deep understanding of JavaScript fundamentals and modern web
              technologies
            </li>
            <li>Expertise in building scalable frontend architectures</li>
            <li>
              Strong focus on performance optimization and code maintainability
            </li>
            <li>
              Experience with legacy codebase refactoring and modernization
            </li>
            <li>
              Proven track record in team leadership and technical mentoring
            </li>
            <li>Pixel-perfect design implementation and attention to detail</li>
            <li>Excellent problem-solving skills and analytical thinking</li>
            <li>Ability to rapidly learn and adapt to new technologies</li>
            <li>Strong code review practices and quality assurance</li>
            <li>
              Experience in fintech, telecom, travel, and enterprise SaaS
              domains
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
