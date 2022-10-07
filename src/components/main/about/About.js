import React, { Component } from "react"
import Content from "./Content";

class About extends Component{

  render() {
    const assets =
      {
        images: {
             type: 'logo',
           src: './assets/images/elvin.svg',
             alt: 'site logo',
             name: 'Elvin',
           url: '/',
           svg:<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="50" height="50" viewBox="0 0 900.000000 1000.000000"
             preserveAspectRatio="xMidYMid meet">
             <title id='rebel' lan='eng'>Rebel Icon</title>
            <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M918 9923 c-136 -299 -218 -649 -218 -930 0 -270 75 -695 206 -1177
            30 -109 53 -201 50 -203 -8 -9 -131 55 -230 121 -55 36 -101 65 -102 63 -1 -1
            -8 -58 -15 -127 -31 -323 20 -676 142 -981 48 -122 162 -350 217 -434 129
            -199 317 -355 599 -496 l133 -66 -43 -12 c-57 -17 -158 -73 -228 -126 -154
            -119 -303 -337 -374 -546 l-24 -70 44 -47 c141 -150 703 -939 780 -1095 25
            -53 35 -130 21 -175 -6 -17 -15 -22 -45 -22 -99 0 -251 -129 -320 -271 -58
            -122 -74 -217 -69 -403 4 -119 10 -166 28 -221 85 -266 292 -487 627 -669 l76
            -41 37 -105 c134 -382 329 -703 561 -925 101 -96 318 -260 529 -400 638 -423
            1172 -608 1596 -556 364 46 819 243 1294 560 214 143 431 310 533 410 221 215
            416 534 542 887 l47 131 72 39 c231 125 444 311 539 471 93 155 136 339 123
            518 -16 208 -68 337 -181 451 -88 89 -158 127 -226 122 -44 -3 -49 -1 -49 18
            0 70 128 282 613 1018 l191 288 -12 47 c-18 69 -102 233 -176 344 -131 196
            -228 297 -393 409 -74 49 -266 148 -290 148 -25 0 -22 20 11 77 50 83 113 247
            146 376 143 570 -29 1111 -493 1553 -320 304 -736 549 -1325 778 -274 106
            -444 179 -682 291 -410 193 -946 495 -1307 736 l-103 69 0 -80 c0 -212 39
            -495 88 -640 34 -99 92 -242 128 -311 20 -41 22 -49 8 -49 -66 0 -738 165
            -1018 250 -698 212 -1292 527 -1992 1057 l-31 23 -35 -77z m1979 -5692 c551
            -71 774 -133 1243 -346 246 -112 409 -155 580 -155 179 0 332 41 597 160 426
            192 605 246 1043 314 449 70 820 74 1035 11 94 -27 130 -89 143 -242 23 -270
            -70 -990 -147 -1142 -56 -108 -455 -335 -784 -445 -258 -87 -473 -126 -729
            -133 -220 -7 -282 4 -416 69 -109 53 -203 142 -332 312 -177 234 -288 321
            -412 320 -119 -1 -227 -86 -398 -313 -115 -153 -149 -191 -220 -246 -136 -105
            -266 -145 -467 -145 -471 0 -1009 166 -1407 432 -165 112 -186 142 -226 328
            -41 189 -100 696 -100 857 0 173 32 284 91 321 40 24 127 48 225 61 113 16
            498 6 681 -18z"/>
            </g>
          </svg>
           },
        content: {
          type: "about_me",
          title:" About Me",
          content:"Elvin Garcia is an award-winning Speaker, VP of Developer Experience at Netlify, Vue core team member, and Staff Writer at CSS-Tricks. Sarah is formerly Principal Lead of Emerging Markets, Cloud Advocates at Microsoft and Manager of UX & Engineering at Trulia/Zillow Group. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops. Sarah is a co-organizer of ConcatenateConf, a free conference for Nigerian and Kenyan developers. Sarah is also the co-founder of Web Animation Workshops with Val Head. She has worked for 15 years as a web developer, and at points worked as a Scientific Illustrator and a Professor in the Greek Islands.",
        }
      }

    return (
      <section className="about_me">
        <Content assets={assets} />
      </section>
    )
  }
}


export default About;