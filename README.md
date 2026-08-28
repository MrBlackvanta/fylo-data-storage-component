# Fylo data storage component

My solution to the [Fylo data storage component](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://fylo-data-storage-component.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/fylo-data-storage-component

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

Where I didn't follow the design exactly:

- **"GB Left" is darker than designed.** The design paints it as the page ink at 50%,
  which is 3.5:1 and fails AA at 12px bold. 58% clears 4.5:1 and keeps the hue.
- **The meter is 81.5% full, not the 74.8% drawn.** The copy says 815 of 1000 GB, so the
  fill is derived from the numbers. The bar can't contradict the text next to it.
- **Mobile side margins are equal.** The design's are asymmetric by a pixel, which a
  centred max-width can't reproduce, so I split the difference.
- **The callout tail is 23px** instead of 22.7, to stay on the spacing scale. It lands
  within a fifth of a pixel of the design.

The whole composition sits slightly higher than the frame because the attribution footer
is in flow and the design doesn't have one.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
