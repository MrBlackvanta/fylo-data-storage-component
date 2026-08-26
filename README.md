# Frontend Mentor - Fylo data storage component solution

This is a solution to the [Fylo data storage component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design deviations](#design-deviations)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.webp)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/fylo-data-storage-component)
- Live Site URL: [Cloudflare](https://fylo-data-storage-component.abdelrhman-ahmed8881.workers.dev)

## My process

### Built with

- [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Design deviations

Everything below is deliberate, with the reason. Every other measured value matches the Figma
source exactly.

| What                | Design                                  | Built                         | Why                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "GB Left" colour    | `#868996`                               | `#727685`                     | The design paints it as the page ink at 50% over white, which is 3.48:1 and fails WCAG AA for 12px bold. Raising the ink to 58% is the smallest darkening that clears 4.5:1, at 4.52:1, keeping hue and saturation. |
| Meter fill length   | 74.8% of the track                      | 81.5%                         | The design draws 339px of a 453px track while the copy states 815 GB of 1000 GB, which is 81.5%. The fill is derived from the data so the bar cannot contradict the numbers beside it.                              |
| Vertical placement  | card top at y=289 desktop, y=127 mobile | y=290.5 desktop, y=118 mobile | The attribution footer sits in flow and the design has no footer, so the composition centres in the height left over. Desktop lands within 1.5px; mobile sits half the footer's height higher.                      |
| Mobile side margins | 25px left, 24px right                   | 24.5px both                   | The design's own margins are asymmetric by a pixel. A centred max-width cannot reproduce that, so the difference is split.                                                                                          |
| Callout tail        | 22.7px square                           | 23px square                   | Tailwind's 4px spacing scale. The rendered tail reaches 21.5px below the bubble against the design's 21.7px.                                                                                                        |

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [Abdelrhman Abdelaal](https://www.linkedin.com/in/abdelrhman-vanta/)
