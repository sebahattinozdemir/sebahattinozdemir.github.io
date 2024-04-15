"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Results-driven Senior Frontend Developer with expertise in
              building dynamic and responsive web applications. Proficient in
              frontend (HTML5, CSS/SCSS, Angular, React, Ngrx, Redux, Bootstrap, Tailwindcss, Primeng, Material UI). Successful track
              record in full-time roles across three companies and consultant
              positions in four organizations.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Where there is no freedom, there is death and destruction.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg width="572" height="205">
                <path
                  stroke="black"
                  strokeWidth="2"
                  d="M 104.5,198.88801 C 94.403521,197.57189 91.639359,194.48478 93.875273,187.02196 C 94.832471,183.82712 95.527121,183.14678 98.256419,182.73108 C 100.04039,182.45937 101.65976,182.38097 101.85501,182.55687 C 102.05027,182.73278 100.56518,184.32089 98.554814,186.08602 C 96.142275,188.20425 95.00166,190.00156 95.1998,191.37264 C 95.716735,194.94968 99.625038,196.15131 109.21524,195.68177 C 116.62725,195.31887 119.05672,194.72022 125.46206,191.67833 C 135.1563,187.07456 142.12829,180.19914 146.19305,171.2345 C 148.83762,165.40203 149.17055,163.71348 148.73813,158.32637 C 147.22685,139.49909 129.2432,126.08541 105.42159,126.01736 C 100.17523,126.00238 97.642814,126.76331 86.921586,131.57617 C 74.722381,137.05251 59.867774,142 55.624522,142 C 54.074915,142 47.493179,148.72236 32.104664,166.02239 C 20.352202,179.23471 10.387387,190.26058 9.9606292,190.52433 C 9.5338718,190.78808 8.2696862,190.66539 7.1513279,190.25168 C 5.3588829,189.58861 7.4381479,186.89275 24.69944,167.49974 L 44.280931,145.5 L 38.087798,144.89733 C 31.109133,144.21822 28.974806,142.88816 30.586151,140.22248 C 32.53898,136.99187 44.000387,130.27808 51.258034,128.11344 C 55.241115,126.92546 59.611778,125.62025 60.970619,125.21299 C 62.435697,124.77388 69.533642,117.35561 78.410314,106.98625 C 96.142592,86.272143 112.25585,70 115.03542,70 C 116.11594,70 117,70.218345 117,70.485211 C 117,70.752077 107.1,82.243863 95,96.022513 C 82.9,109.80116 73,121.50782 73,122.0373 C 73,122.59941 77.87122,123 84.706463,123 L 96.412926,123 L 105.95646,117.34388 C 126.40209,105.22647 149.40286,86.995249 150.49014,82.044912 C 151.21689,78.73601 153,78.821405 153,82.165113 C 153,86.846042 147.53745,91.585354 114.59589,115.48454 C 109.27694,119.34345 106.25713,122.12445 107.09589,122.39144 C 107.86815,122.63726 111.80435,123.54674 115.84299,124.41249 C 143.10965,130.2576 157.06954,149.951 150.13346,172.78651 C 147.19352,182.46562 141.50613,188.6669 130.66141,194.01798 C 121.71406,198.43285 113.18632,200.02032 104.5,198.88801 z M 47.710018,142.38017 C 49.990153,141.76885 58.382722,131.55257 57.817732,130.07604 C 57.343788,128.83745 47.267501,131.65941 41.050635,134.77182 C 34.842301,137.87997 32.643794,140.51112 35,142.01315 C 36.668861,143.07702 44.290038,143.29709 47.710018,142.38017 z M 74.066915,133.71845 C 81.250523,130.99353 89,127.23699 89,126.47968 C 89,126.21585 84.3875,126.00306 78.75,126.00679 L 68.5,126.01358 L 64.013172,131.46728 C 61.545417,134.46681 59.382552,137.35234 59.206807,137.87958 C 58.848471,138.95459 64.251956,137.4415 74.066915,133.71845 z M 293.25,188.01096 C 290.77538,186.50216 290,185.33136 290,183.10359 C 290,175.42128 303.78973,171.06488 328.25,171.01981 L 339,171 L 339,173.48467 C 339,175.90919 338.8608,175.95548 333.25,175.39687 C 321.57988,174.23501 295.5,180.15402 295.5,183.96449 C 295.5,187.47079 304.56633,187.46079 335.4271,183.92049 C 371.90938,179.73529 412.19847,171.71418 466,157.92489 C 518.9898,144.34364 540.59636,136.03502 554.29733,123.97089 C 566.68465,113.06349 566.95621,100.89344 555.07597,89.075567 C 550.61488,84.637898 547.65015,82.394209 539.5,77.287775 C 530.33253,71.54394 502.908,60.225515 495.8104,59.256563 C 488.71556,58.287987 487.5585,59.183059 481.88779,70.026677 C 475.95485,81.371764 473.4881,82.258605 476.33372,72.023469 C 477.7008,67.106356 477.78016,65.620848 476.76281,63.991806 C 475.26488,61.593233 476.48142,59.115731 480.04367,57.310313 C 481.83198,56.403963 483.50294,53.069709 487.05979,43.310313 C 493.69567,25.102589 493.78171,24.72482 490.32545,28.972126 C 488.77145,30.881795 480.80419,41.681795 472.62043,52.972126 C 455.13595,77.093745 454.36487,78 451.32569,78 C 449.44992,78 449.00425,77.467998 449.02196,75.25 C 449.03404,73.7375 449.94204,70.520497 451.03973,68.101104 C 452.13743,65.681711 452.78096,63.447628 452.46981,63.136474 C 451.26074,61.927403 448.27059,64.985231 442.75175,73.074483 C 435.32482,83.96054 431.63829,87.411971 428.96551,85.98154 C 427.88448,85.402991 427,84.045465 427,82.964816 C 427,79.756905 425.5609,80.661589 420.58117,87 C 417.98854,90.3 415.5169,93 415.08864,93 C 413.46809,93 411.22751,89.356135 410.55969,85.634566 L 409.86606,81.769131 L 401.0618,90.384566 C 396.21946,95.123055 391.51494,99 390.60733,99 C 388.29466,99 386.6294,94.778933 387.38281,90.826526 C 387.73156,88.996937 391.84557,79.66997 396.52505,70.099933 C 401.20453,60.529896 404.86147,52.528135 404.65158,52.318242 C 404.27953,51.946193 396.27475,61.938211 372.46128,92.5 C 357.62505,111.54055 357.02372,112.02372 353.07609,108.07609 C 351.17754,106.17754 351.08187,106.22248 345.81918,111.48517 C 342.01461,115.28974 339.41028,117.02001 336.73213,117.52243 C 331.13048,118.57331 329.62977,116.87614 330.31238,110.2623 L 330.8592,104.96407 L 328.1796,106.91735 C 326.70582,107.99166 321.9,112.06795 317.5,115.97579 C 306.90495,125.38572 296.26818,132.66818 294.98836,131.38836 C 292.89334,129.29334 305.55554,97.050403 312.06135,87.913847 C 314.36269,84.681907 314.15062,83.256702 311.58223,84.694042 C 310.71996,85.176595 299.99871,97.434086 287.75723,111.93291 C 264.94423,138.95266 260.07423,143.5028 257.1248,140.55337 C 254.67564,138.10421 255.66457,133.60234 261.34564,121.33897 C 264.36209,114.82754 266.67107,109.34024 266.4767,109.14499 C 266.28233,108.94973 264.63306,110.51678 262.81165,112.62733 C 246.38535,131.66119 231.747,146.16338 219.91736,155.12264 C 213.21731,160.19697 203.41357,164.99816 199.75,164.99921 C 194.21323,165.0008 191.20802,158.71878 192.26395,149.35056 C 192.89228,143.7761 192.41527,144.24238 185.973,155.5 C 183.14033,160.45 181.14513,163.6 181.53923,162.5 C 188.25729,143.74878 201.0708,121.27695 214.04082,105.5 C 220.43165,97.726086 224.09829,94.162204 231.5,88.530099 C 235.53143,85.46251 235.02009,86.156523 228.86038,92.112752 C 221.37422,99.351617 216.03461,106 217.70693,106 C 218.17065,106 221.91379,102.57484 226.02503,98.38854 C 238.25882,85.931364 250.34577,77.621134 260.88148,74.423422 C 267.87802,72.299892 270.46558,72.619427 273.874,76.02785 C 276.41296,78.566809 276.95014,79.965367 277.20093,84.689533 L 277.5,90.323365 L 281.84465,84.117795 C 285.27105,79.223789 286.47351,78.148086 287.53396,79.028187 C 288.62793,79.936097 287.98311,81.668782 284.07525,88.322075 C 263.02242,124.16536 260,129.85577 260,133.64922 C 260,136.34458 263.23584,134.89028 268.67584,129.75 C 277.14119,121.75106 303,90.377386 303,88.105588 C 303,87.67941 300.31396,88.03052 297.03103,88.885832 C 291.69131,90.277005 290.99186,90.760318 290.39615,93.470473 C 289.73766,96.466193 289.72041,96.473453 288.84965,94.121093 C 288.30407,92.647192 288.35473,91.277499 288.98282,90.520706 C 289.54037,89.848891 294.56544,87.544399 300.14962,85.399612 L 310.30269,81.5 L 322.90135,66.542073 C 345.15004,40.127001 345.80333,39.791822 332.89671,61.413834 C 328.0004,69.616442 324.15706,76.490393 324.35595,76.689279 C 324.55483,76.888166 342.93583,70.460311 365.20262,62.405157 L 405.68767,47.759424 L 414.59384,37.19699 C 426.83679,22.677225 429.64692,21.92209 421.5,35.341172 C 419.025,39.417833 417,43.002652 417,43.307437 C 417,43.612223 422.0625,42.071003 428.25,39.882504 C 434.4375,37.694004 452.76911,31.312646 468.98692,25.701707 L 498.47383,15.5 L 500.81184,11.25 C 503.29169,6.7421617 506,5.6111238 506,9.0833333 C 506,10.229167 506.34404,11.016667 506.76454,10.833333 C 517.72987,6.0525538 522.04986,4.7964936 523.47092,5.975867 C 524.31191,6.6738293 525,8.1757976 525,9.3135744 C 525,11.304677 524.9489,11.312379 523.6375,9.5189245 C 522.32447,7.7232539 521.94439,7.7748012 513.17075,10.938432 C 504.60812,14.025975 503.87594,14.518229 500.86338,19.212905 C 499.10166,21.958303 495.54581,30.121016 492.96148,37.352269 C 485.9784,56.891789 486.25053,55.194731 490.16038,54.820042 C 493.1166,54.536742 494.44802,53.237163 501.7578,43.5 C 506.79397,36.791436 509.91502,31.719739 509.7578,30.5 C 509.41163,27.814404 505.05515,27.204097 503.30603,29.59616 C 502.58771,30.578515 502,30.871768 502,30.247834 C 502,28.640852 506.055,26 508.52251,26 C 509.66513,26 511.14,26.54 511.8,27.2 C 515.04442,30.444418 511.72465,37.183935 500.60461,49.927957 L 494.99577,56.355914 L 508.74789,60.970008 C 526.51937,66.932676 539.30243,73.29353 550.46233,81.727121 C 564.7389,92.515988 569.75578,101.58725 566.98832,111.60854 C 565.93672,115.41651 564.18248,117.95258 559.06875,123.05773 C 548.2769,133.83149 528.83511,142.61654 497.42572,150.91204 C 489.21658,153.08014 475.32387,156.90596 466.55305,159.41386 C 429.65448,169.9645 383.66797,179.11883 325.73323,187.44624 C 303.94161,190.57852 297.64076,190.68806 293.25,188.01096 z M 208.78984,159.06764 C 210.83043,158.00484 215.06649,154.96734 218.20332,152.31764 C 226.27022,145.50347 251.59446,118.89384 258.32124,110.16344 C 265.59855,100.71853 273.20335,85.688868 272.79854,81.551377 C 272.50689,78.570473 272.38514,78.504181 267.52691,78.681027 C 261.12534,78.914052 245.72454,86.437363 234.45074,94.838768 C 225.35159,101.6196 208.23767,118.97894 203.8842,125.84365 C 198.37314,134.53369 194.20453,149.10174 195.51788,155.08142 C 196.85696,161.17822 201.85517,162.67942 208.78984,159.06764 z M 308.88868,121.56545 C 312.52491,118.57644 322.5499,109.18034 331.16644,100.68523 C 345.38669,86.66538 347.29445,85.128844 351.83314,84.040028 C 357.88338,82.588598 361,83.776907 361,87.535184 C 361,90.871093 362.22869,90.639528 363.83971,87 C 364.57007,85.35 365.80492,84 366.58382,84 C 368.52149,84 368.51668,84.016774 364,93 C 359.24499,102.45725 358.77272,105.84 362.57114,103.23469 C 364.14118,102.1578 401.27284,52.939503 400.84101,52.507674 C 400.63954,52.306204 385.85539,57.549259 367.98735,64.158907 C 350.11931,70.768555 332.125,77.416448 328,78.932002 L 320.5,81.687556 L 310.25,101.82614 C 300.67935,120.62998 298.37381,127 301.13868,127 C 301.76496,127 305.25246,124.55445 308.88868,121.56545 z M 344.08701,107.75 C 350.94167,99.817214 358,89.465354 358,87.344964 C 358,84.883028 354.05409,85.956339 350.15513,89.478814 C 344.7651,94.348381 334,109.77398 334,112.62793 C 334,117.04523 337.5302,115.33808 344.08701,107.75 z M 406.86015,80.75 C 414.22299,73.4625 420.02039,68.4 419.74327,69.5 C 419.46615,70.6 418.19884,74.975794 416.92703,79.223986 C 415.65521,83.472179 414.95124,87.284577 415.36265,87.695982 C 416.31556,88.648888 424.56252,79.511609 430.65745,70.75 C 433.24002,67.0375 435.72359,64 436.17651,64 C 437.2906,64 437.3281,63.847735 434.5,70.807721 C 428.08123,86.604421 434.15127,85.219191 443.78794,68.688143 C 448.44898,60.692457 452.67327,56.273268 454.1979,57.797895 C 454.66829,58.268286 455.32887,60.981192 455.66587,63.826575 C 456.00286,66.671959 456.67158,69 457.15192,69 C 457.63226,69 465.12133,59.4375 473.79431,47.75 C 488.96767,27.302747 494.70972,19 493.67739,19 C 491.38296,19 412.21001,48.701834 411.27639,49.912846 C 409.066,52.779946 390,90.925506 390,92.480751 C 390,96.156888 394.35632,93.125897 406.86015,80.75 z M 436,55 C 436,53.711111 436.50641,53.002137 437.25,53.25 C 437.9375,53.479167 438.5,54.266667 438.5,55 C 438.5,55.733333 437.9375,56.520833 437.25,56.75 C 436.50641,56.997863 436,56.288889 436,55 z M 428.16819,54.365168 C 428.36575,53.339326 428.97123,52.6125 429.5137,52.75 C 430.9671,53.118396 430.7131,55.2623 429.1545,55.781834 C 428.2783,56.073899 427.93428,55.579766 428.16819,54.365168 z M 320.46147,76.39567 C 322.00145,74.855695 326.3906,67 325.71105,67 C 325.52977,67 323.24469,69.475 320.6331,72.5 C 317.69526,75.902886 316.45142,78 317.37094,78 C 318.18835,78 319.57909,77.278052 320.46147,76.39567 z M 161,148.96482 C 161,146.3028 163.85111,142 165.61501,142 C 167.47918,142 167.37743,146.01614 165.4433,148.77749 C 163.49572,151.55805 161,151.66327 161,148.96482 z"
                  id="path2476"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Angular
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NGRX
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                RXJS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REDUX
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CONTEXT-API
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>   
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Java Developer (Ankara / Turkey)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2019
                  </div>
                   {/* JOB COMPANY */}
                   <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    <a  target="_blank" _blank href="https://ekinokssoftware.com/en/index.html">
                      Ekinoks
                    </a>
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
