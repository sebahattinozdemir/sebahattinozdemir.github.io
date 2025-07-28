import React from "react";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";
import enerjisa from "../../assets/companies/enerjisa.webp";
import metu from "../../assets/companies/metu.jpeg";
import modaramo from "../../assets/companies/modaramo.jpeg";
import argentex from "../../assets/companies/argentex.jpg";
import sword from "../../assets/companies/sword.png";
import keytours from "../../assets/companies/keytours.webp";
import turkpages from "../../assets/companies/turkpages.jpg";
import ekinoks from "../../assets/companies/ekinoks.jpeg";
import ekip from "../../assets/companies/ekip.png";
import invemo from "../../assets/companies/invemo.jpg";
import ge from "../../assets/companies/general.jpg";
import gbg from "../../assets/companies/gbg.jpeg";
import moment from "moment";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience{" "}
        {moment().diff("01/01/2016", "years", true).toFixed(2)} years
      </Title>
      <ResumeItem
        date={"Nov 2024 - July 2025"}
        title={"Senior Frontend Developer"}
        company={"Argentex - London"}
        logo={argentex}
      >
        • Microfrontend architecture with Nx monorepo + Angular + Angular
        Material + Storybook <br />
        • Turned Mfe architecture to monolithic architecture and developed
        cross-platform UI with React + Tailwindcss + Shadcn/ui <br />
        • Integrated state management with Zustand and NgRx <br />
        • Implemented data fetching and caching using React Query <br />
        • Contributed to shared design system using Angular Material and
        Shadcn/ui <br />• Worked fully remote in an agile, fast-paced
        environment
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"July 2024 - Dec 2024"}
        title={"Senior Frontend Developer"}
        company={"Keytours Vacations - Fairfax, USA"}
        logo={keytours}
      >
        • Developed modular UI components in Angular • Built and styled dynamic
        layouts with Bootstrap and Angular Material <br />
        • Integrated Dexexpress for advanced UI widgets and data visualization
        <br />
        • Managed state using NgRx <br />• Contributed to cross-team
        collaboration and scalable UI development
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"July 2022 - Sep 2024"}
        title={"Senior Fullstack Developer - Frontend Focused"}
        company={"General Electric - Istanbul"}
        logo={ge}
      >
        • Delivered scalable fullstack features using VueJS + Angular + Spring
        Boot <br />
        • Implemented micro frontend architecture with shared UI modules <br />
        • Migrated legacy systems to modern frontend stacks (React → Vue) <br />
        • Designed enterprise solutions for factory reporting and dashboards{" "}
        <br />
        • Maintained 80%+ unit test coverage using Jasmine; enforced code
        quality via SonarQube + Husky <br />
        • CI/CD: Jenkins · Repo: Github · Task management : Rally · Multi-env:
        Dev/Stg/Prod <br />
        • Contributed to clean architecture and cross-functional team alignment
        <br />• Worked on three different independent frontend project
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"Aug 2023 - Dec 2024"}
        title={"Senior Frontend Developer"}
        company={"Sword Group - Athens"}
        logo={sword}
      >
        • Built archive/document management platform for the European Commission
        <br />
        • Introduced component-based UI with Angular 15, NgRx, and EUI
        components
        <br />
        • Maintained 80%+ unit test coverage using Jasmine; enforced code
        quality via SonarQube + Husky <br />• CI/CD: Bamboo · Repo: Bitbucket ·
        Task mgmt: Jira · Multi-env: Dev/Stg/Prod
      </ResumeItem>

      <ResumeItem
        classNames={"not-last"}
        date={"Sep 2019 - Aug 2022"}
        title={"Frontend Developer"}
        company={"Turkpages.com - Izmir"}
        logo={turkpages}
      >
        • Built reusable UI components with Vue.js and PrimeNG <br />• Migrated
        legacy pages to Nuxt.js for improved SSR and performance <br />
        • Collaborated on Angular-based admin dashboards <br />• Enhanced user
        experience with dynamic filtering and listing modules <br />• Maintained
        cross-browser responsive design for B2B customers
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"Sep 2018 - July 2019"}
        title={"Frontend Developer"}
        company={"EKINOKS Software - Ankara"}
        logo={ekinoks}
      >
        • Developed reusable UI components using Angular <br />
        • Integrated frontend with backend services (REST APIs) <br />• Worked
        within a secure and high-compliance development environment
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"Jan 2018 - Jun 2018"}
        title={"Frontend Developer"}
        company={"EKIP.CO - Cyprus"}
        logo={ekip}
      >
        • Built frontend from scratch using Angular 13 + Angular Universal +
        Ng-Bootstrap + SwiperJS <br />
        • Integrated real-time Firebase sync, 3rd party auth (Google, Facebook),
        and Figma-based design delivery <br />• Delivered MVP in 6 months with
        full SSR support and CI/CD via GitHub Actions
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"Dec 2017 - Mar 2018"}
        title={"Frontend Developer"}
        company={"INVEMO LLC - USA"}
        logo={invemo}
      >
        • Built patient dashboard app for medical tourism <br />
        • Used React + MobX + React Query + Next.js with pixel-perfect
        mobile-first UI <br />• Collaborated with a backend developer via Asana;
        rapid sprints and feedback cycles
      </ResumeItem>
      <ResumeItem
        classNames={"not-last"}
        date={"Dec 2016 - Dec 2017"}
        title={"Frontend Developer"}
        company={"MODARAMO MEDIA - USA"}
        logo={modaramo}
      >
        • Built influencer content platform rambly.com in React + Next.js <br />
        • Focused on UI fidelity, performance, and state management with Context
        API <br />• Worked directly with designers, managed bugs/features via
        Jira
      </ResumeItem>

      <ResumeItem
        classNames={"not-last"}
        date={"Aug 2016 - Sep 2016"}
        title={"SAP Intern"}
        company={"Enerji SA"}
        logo={enerjisa}
      >
        • Supported SAP MM module testing and documentation <br />• Gained
        hands-on experience with ERP systems in an enterprise environment
      </ResumeItem>
      <ResumeItem
        date={"Jun 2016 - Aug 2017"}
        title={"Software Engineer Intern"}
        company={"GBG PLC. - Mersin"}
        logo={gbg}
      >
        • Interned in the QA team, focusing on test automation <br />
        • Developed a C#-based internal tool for testing and validation <br />•
        Worked closely with senior engineers in an agile environment
      </ResumeItem>
      <Title icon={"fa fa-university"}>Education</Title>
      <ResumeItem
        date={"2013 - 2019"}
        title={"MIDDLE EAST TECHNICAL UNIVERSITY"}
        company={"Turkey"}
        logo={metu}
      >
        Bachelor of Computer Engineering (2.78 / 4.0)
      </ResumeItem>
    </div>
  );
};

export default Resume;
