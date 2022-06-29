
# Event platform - Meet My Playlist

This is my version of the event platform project developed during the Ignite Lab event by [Rocketseat](https://www.rocketseat.com.br/).

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Differences](#differences)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The project

It consists in a platform where user can subscribe and have access to content.

### Links

- [Repository](https://github.com/braien-machado/event-platform)
- [Demo](https://meetmyplaylist.vercel.app/)

## My process

### Built with

- Responsive design
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - Style
- [Apollo](https://restcountries.com/) - Build with GraphQL
- [GraphCMS](https://app.graphcms.com/) - Store event info
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) - Generate code from GraphQL schema and operations
- [Phosphor Icons](https://phosphoricons.com/) - Icons
- [SVG 2 JSX](https://svg2jsx.com/) - Convert SVG files to React Components
- Airbnb eslint - Code quality

### Differences

Although it was developed based on the Rocketseat version, it has some differences. Responsive design and menu interaction are some of them. Also, I have completely changed the content and the GraphCMS schema to fit my needs and so the related operations.

### What I learned

- Using Vite to develop a React app.
- It was my first time using GraphQL, so everything related to it was new to me. It's very simple and fast.
- I'm used to TailwindCSS, but I've learned some things like using `[]` to set specific values to properties (`className="w-[23px]"`) and to add new rules in `tailwind.config.js`

The example below allows me to set `blur-background.png` as bg image just by adding `bg-blur` as a container class name.
```
theme: {
	extend: {
		backgroundImage: {
			blur:  'url(/src/assets/blur-background.png)',
		},
	},
}
```

## Author

- Portfolio - [Braien Machado de Paula](https://braien-machado.vercel.app/)
- Linkedin - [braien-machado](https://www.linkedin.com/in/braien-machado/)
