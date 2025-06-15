# Frontend Mentor - IP Address Tracker Solution

This is my solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). The challenge involves building a web app that allows users to input an IP address or domain name and returns geolocation data, along with a map indicating the location.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on screen size (mobile/desktop)
- Automatically see their own IP address geolocation on first load
- Enter an IP address or domain and get:
  - IP
  - Location
  - Timezone
  - ISP
  - Marker on the map

### Screenshot

![Screenshot of IP Tracker](./public/screenshot%20.jpg)

> You can capture a screenshot and replace `screenshot.jpg` with your actual image in the repo.

### Links

- 🔗 **Live Site URL**: [https://the-ip-tracker.netlify.app/](https://the-ip-tracker.netlify.app/)
- 🧠 **Frontend Mentor Challenge**: [IP Address Tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)

---

## My process

### Built with

- Semantic HTML5
- CSS Flexbox
- Mobile-first responsive layout
- [React](https://reactjs.org/) with Vite
- [Axios](https://axios-http.com/)
- [Leaflet.js](https://leafletjs.com/) with [React Leaflet](https://react-leaflet.js.org/)
- [IPify Geolocation API](https://geo.ipify.org/)
- Netlify for deployment

### What I learned

This project helped me:

- Understand how to use and secure environment variables in a React + Vite app
- Work with external APIs like IPify to fetch IP geolocation data
- Render dynamic Leaflet maps with React and show markers based on API response
- Deploy React apps with environment variables using Netlify

```js
const fetchIPInfo = async (ip = '') => {
  const response = await axios.get('https://geo.ipify.org/api/v2/country,city', {
    params: {
      apiKey: import.meta.env.VITE_IPIFY_API_KEY,
      ipAddress: ip,
    },
  });
  setIpData(response.data);
};
```

### Continued development

I’d like to explore:

- Adding error handling and loading states
- Allowing domain name input (currently only IP tested)
- Improving accessibility and keyboard navigation
- Adding history tracking of previous searches

### Useful resources

- [IPify API Docs](https://geo.ipify.org/)
- [React Leaflet Docs](https://react-leaflet.js.org/)
- [Netlify Docs on Env Variables](https://docs.netlify.com/environment-variables/overview/)
- [Frontend Mentor community solutions](https://www.frontendmentor.io/solutions)

---

## Author

- GitHub - [JEREMIAHCHUKWUEMEKA](https://github.com/JEREMIAHCHUKWUEMEKA)
- Frontend Mentor - [@JEREMIAHCHUKWUEMEKA](https://www.frontendmentor.io/profile/JEREMIAHCHUKWUEMEKA)

---

## Acknowledgments

Special thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the challenge idea and to the open source community for libraries like Leaflet and Axios. This was a fun project that strengthened my frontend and API integration skills.
