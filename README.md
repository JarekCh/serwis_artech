# Serwis Artech

Commercial website for local typewriter service, designed from scratch and finished with deployment on hosting. Project is divided into 3 parts:

- frontend - visual part
- CMS - content mantain
- backend - emails and to preserve safety of api keys.

## Tech Stack

**[Client](#Client):** React, Redux Toolkit, React Router, TailwindCSS, JS, Framer-motion, Axios, moment.js

**[Server](#Sever):** Node, Express, Nodemailer

**[Content_Managment](#Content_Managment):** Sanity

## Features

- EN/PL language mode toggle
- Lazy Loading
- Bandwidth and performance optimization
- Content managment

## Live

https://serwisartech.pl

### Client

Fundamentals of client are based on React and related libraries such as react router and react router has for navigation, react icons, redux toolkit responsible for state. Visual part includes Tailwind CSS insted of commnon CSS and Motion framer for animation. There are libraries like axios that replace fetch in REST API requests and moment.js for time stamps while adding writers in shop and shop/renoveted writers.

Lazy loading - types are used in project, the one build in react router to lazy load components and the other one as Intersection Observer API to lazy load pictures. Intersection Observer API ware also used with infinite scroling to fetch more content(typewriters) in typwriters page.

HOC used in ToTopWrapper button to stick with DRY principle.

Bandwidth and performance optimization such as images in format webp , fetching imgaes with lower resolution to keep control over bandwitch.

Language toggle mode stored in local storage.

### Sever

Node.js with express was used as proxy server to connect frontend with sanity and secure the api keys.
To prevent over extensive usage liraries like compression, express rate limiter or apiCache were used. As for seafty measure cors and helmet. Beside routing and endpints, nodemailer library were used to provide non paid communication endpoint connected with frontend contact form.

### Content Managment

Sanity headless CMS was used as content menager and data base.
