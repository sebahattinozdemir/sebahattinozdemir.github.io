import React from 'react';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import enerjisa from '../../assets/companies/enerjisa.webp';
import metu from '../../assets/companies/metu.jpeg';
import modaramo from '../../assets/companies/modaramo.jpeg';
import argentex from '../../assets/companies/argentex.jpg';
import sword from '../../assets/companies/sword.png';
import keytours from '../../assets/companies/keytours.webp';
import turkpages from '../../assets/companies/turkpages.jpg';
import ekinoks from '../../assets/companies/ekinoks.jpeg';
import ekip from '../../assets/companies/ekip.png';
import invemo from '../../assets/companies/invemo.jpg';
import ge from '../../assets/companies/general.jpg';
import moment from 'moment';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('01/01/2016', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Nov 2024 - Present'}
                title={'Senior Frontend Developer Angular React Tanstack'}
                company={'Argentex - London'}
                logo={argentex}
            >
                • Fx Trading Dashboard App using Typescript, Nx, Angular Material, Angular, NgrRx, RxJS, and Figma <br/>
                • Implemented complex trading interfaces and real-time data visualization <br/>
                • Led frontend architecture decisions and best practices <br/>
                • Collaborated with UX/UI team for optimal user experience
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'Aug 2023 - Dec 2024'}
                title={'Senior Frontend Developer ANGULAR'}
                company={'Sword Group - Athens'}
                logo={sword}
            >
                • European Commission - Archive Management System development <br/>
                • Utilized DIGIT Typescript, Enterprise Solution Design, Eui, Angular, NgRx, RxJS <br/>
                • Implemented complex document management interfaces <br/>
                • Led team in adopting best practices and maintaining code quality
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'July 2024 - Dec 2024'}
                title={'Senior Frontend Developer Angular'}
                company={'Keytours Vacations - Fairfax, USA'}
                logo={keytours}
            >
                • Developed www.keytours.com using Typescript, Angular, Angular Material, SCSS, NGRX <br/>
                • Implemented responsive travel booking interfaces <br/>
                • Optimized performance and user experience <br/>
                • Collaborated with backend team for API integration
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'July 2022 - Sep 2024'}
                title={'Senior Frontend Developer Angular'}
                company={'General Electric - Istanbul'}
                logo={ge}
            >
                • Internal projects for factories using Spring Framework, Typescript, Enterprise Solution Design <br/>
                • Angular, Angular Material, CSS, Java development <br/>
                • Led frontend architecture and development <br/>
                • Implemented factory management interfaces
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'Sep 2019 - Aug 2022'}
                title={'Frontend Developer Angular React'}
                company={'Turkpages.com - Izmir'}
                logo={turkpages}
            >
                • Developed www.turkpages.com and seslidunya.net using Angular, Primeng, Ngrx Primeng <br/>
                • Implemented Typescript and CSS solutions <br/>
                • Led frontend development and architecture decisions
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'Sep 2018 - July 2019'}
                title={'Frontend Developer VueJS'}
                company={'EKINOKS Software - Ankara'}
                logo={ekinoks}
            >
                • Defense Project development using Angular 2 and Angular 3 <br/>
                • Implemented Html, Css, Primeng solutions <br/>
                • Worked on secure and sensitive applications
            </ResumeItem>
            <ResumeItem
             classNames={'not-last'}
                date={'Jan 2018 - Jun 2018'}
                title={'Frontend Developer VueJS'}
                company={'EKIP.CO - Cyprus'}
                logo={ekip}
            >
                • Developed interactive betting interfaces on www.swapcasino.com <br/>
                • Used Vue.js for reactive components <br/>
                • Improved user engagement through reactive components
            </ResumeItem>
            <ResumeItem
                 classNames={'not-last'}
                date={'Dec 2017 - Mar 2018'}
                title={'Frontend Developer VueJS'}
                company={'INVEMO LLC - USA'}
                logo={invemo}
            >
                • Developed user interfaces on www.pulseprotocol.com <br/>
                • Enhanced form reactivity and state management <br/>
                • Implemented responsive design solutions
            </ResumeItem>
            <ResumeItem
                 classNames={'not-last'}
                date={'Dec 2016 - Dec 2017'}
                title={'Frontend Developer React'}
                company={'MODARAMO MEDIA - USA'}
                logo={modaramo}
            >
                • Worked with Typescript, SCSS, React, NextJS, Redux, Context API, HTML at www.rambly.com
            </ResumeItem>
            
            <ResumeItem
                classNames={'not-last'}
                date={'Aug 2016 - Sep 2016'}
                title={'SAP Intern'}
                company={'Enerji SA'}
                logo={enerjisa}
            >
                • SAP MM module ABAP programming language
            </ResumeItem>
            <ResumeItem
                date={'Jun 2016 - Aug 2017'}
                title={'Software Engineer Intern'}
                company={'GBG PLC. - Mersin'}
                logo={modaramo}
            >
                • Intern quality assurance team at Gbg plc. During my internship I developed a tool us ng c# for the company.
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2013 - 2019'}
                title={'MIDDLE EAST TECHNICAL UNIVERSITY'}
                company={'Turkey'}
                logo={metu}
            >
                Bachelor of Computer Engineering (2.78 / 4.0)
            </ResumeItem>
        </div>
    );
};

export default Resume;
