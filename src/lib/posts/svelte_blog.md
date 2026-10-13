---
title: "Making a static blog website in Svelte 5"
date: "2026-09-12"
description: "A practical guide to making a simple static Svelte blog. It's this website!"
tags: [svelte, frontend]
---

# Introduction


## Why Svelte?

TL;DR : It's very simple. It's compiled. It's fast. It has easy reactive state

Some additional bits:
1. State management is handled with built-in features (runes)
2. No React hooks
3. It's very small once compiled and easy to host. The small size makes it load fast
4. I am coming from vanilla JS so it feels more natural
5. I don't need 3rd party integrations so the relative small size of the ecosystem isn't a drawback

# How do I start?
## Text editor + repository
Some text editor. I find nvim the best text editor for everything EXCEPT web dev. Just mostly to the issue with multi-langauge files being annoying to setup. Not impossible but annoying.
So I recommend VS Code or the open source version. (For example: https://wiki.archlinux.org/title/Visual_Studio_Code)

## Svelte-kit
One important distinction to make is that Svelte is a language that is actually used for making fancy JS/TS based elements for rendering HTML. Svelte-kit is the missing sauce for making this into a proper framework. Svelte-kit gives you server-side rendering, routing and everything else for making a full application.

Here is where you should start documentation wise: https://svelte.dev/docs/svelte/getting-started

When making a new application you want to pay attention to what it's asking you to do.

You should see something like this:
```bash
npx sv create random-app
Need to install the following packages:
sv@0.16.6
Ok to proceed? (y)
npm notice run npx
npm notice run 'sv' create random-app
Welcome to the Svelte CLI!
Which template would you like?
- SvelteKit minimal
- SvelteKit demo
- Svelte library
```
You want the SvelteKit minimal. However, if this is your first time having a play around the demo is very useful in a separate folder!

Then it will ask you more questions! I will just list the choices I made and justify them later

```bash
Add type checking with TypeScript?
-> Yes, using TypeScript syntax
What would you like to add to your project?
// note: make sure you use space to select instead of enter!
-> prettier
-> eslint
-> tailwindcss
-> sveltekit-adapter

tailwindcss: Which plugins would you like to add?
-> None

sveltekit-adapter: Which svelteKit adapter would you like to use?
-> static

Which package manager do you want to install dependencies with?
-> npm
```

Setup done!

Let's cd into the repository and let's make a home page!

TODO: to be filled in later


