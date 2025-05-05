## JSX Rules

1. You must close self closing elements like <br/>
2. Components can only return a single element

### Components

    Building blocs of React just like Angular

### Props

    Data passed to a component

### State

    Data specific to an instance of a component. IT CHANGES

## JSX syntax:

Using <> at the root of a component prevents having an extra <div></div> mucking up the DOM

{} tell JSX to treat the code as javascript

## Best Practices

Don't shy away from making breaking things down into smaller components. This is important for reusability.

## State

> Use updator functions when you have a reactive piece of code that needs to show
> Check the `state-demo/commonArrayPatterns.js` for summary

## Forms

    - HTML form ele work diffrerntly than other DOM elements in React
    - Form elements keep some internal state

    It's convenient ot have a JS fucntion that handles the submission of the for and has access to the data the user entered
    > Create a controlled form or component.

- React will be the 'Single source of truth'
  React contorls:
  _ what is shown in the form
  _ react updates a piece of data w/ state as it is typed into the form

  ## Effects

  > For doing something after a the pages renders

  - changing parts of the DOM not covered by React
  - async operations like Ajax request when a component is mounted
  - Doing things when a component is aobu to be unmounted

  * useEffect
    > my eeffect always runs after first render
    > By default, effect runs after all re-renders

  ## Getting Data via AJAX on mount

  - When a componnent renders, fetch data from an api

    > Data fetching is asynchronous, and may take a sec
    > show a loading message

  - Fetching Correctly:
    > have an effect that runs only once
    > inside effect, when api call finishes, set state & render
