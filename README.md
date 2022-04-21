notes from me, the developer:

1. the first assignment is a very simple layout of a pure html and css (well, sass) landing page for the integrify academy while using react jsx elements for building the layout. the instructions was to be as stateless as possible, which I have achieved but I needed to use useRef() for displaying / hiding the navbar for mobile sized screens and toggling the mobile menu. it was a good assignment to learn from, since I was focused a lot on the logic how each element inherits properties from one another, and to build a site without using bootstrap. it taught me how to use css in the same way that i would like things displayed with bootstrap.

2. the second assignment is also just a simple single page application which asked to build a custom hook and higher order component for fetching data, when the form is submitted with the country name. it taught me how how higher order components are capable of passing any class based values to it's child components, and how the data can be updated, and what happens when they are updated.


# React assignment
Work individually to finish this assignment. You can ask for help from your pair mate, other class mates or instructors

## Assignment 1
Convert the personal porfolio Website that you've done as previous assignments into a React-based Web app using [create-react-app](https://github.com/facebook/create-react-app)

* It has to look good (because you may use it as your personal Website after the course).
* It has to be responsive with a mobile menu (the harmburger menu).
* Preferrably using the CSS/SASS styles (since it'll be easier to customize the look-and-feel of the site - remember it's your personal Website, not a company Web app) that you've already written but if you want to use it with React-Boostrap or Material-UI, you can also use it.
* Use as much stateless functional components as you can.
* Use components folder structure for a large app (e.g, each component has its own folder).
* Use ESLint (ask Google how to do that with `create-react-app`)

When done (or even not done but you want to have a review), make a PR to upstream, tag pair mate & instructors as reviewers.

## Assignment 2
Write a custom hook that does:

* Given a country name (international or native), returns a country object from [countries APIs](https://restcountries.com/). You may use caching for better performance.
* The example usage of the hook is like this:
```
const [error, country] = useCountry('Suomi')
```
* Convert that hook into a HoC

## Assignment 3
Convert any of your existing React apps:

* Use functional components instead of class components
* Use hooks, HoC, render props if you can
