# react-fruit-list-app

React Fruit List Application to exemplify some React framework features.

## Implementation goals

Implement a feature to allow item selection with the following requirements:

1. Clicking an item selects/unselects it.
2. Multiple items can be selected at a time.
3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
4. Currently selected items should be visually highlighted.
5. Currently selected items' names should be shown at the top of the page.

Feel free to change the component structure at will.

## Proposed solution

To allow multiple item selection, goal number 3 on the goals list above, at the time we use a `selectedItems` array on the `List` component to hold the selected items but we use a little trick. Instead of implementing a classic React `useState` hook on the component to manipulate the `selectedItems` list and trigger a component re-render on every item select or deselect action, we use a simple array constant and manipulate it without ever changing the variable reference. This "trick" leverages the possibility of using an array for collecting the selected values without triggering re-renders to the list component unnecessarily, thus avoiding heavy re-rendering operations since the list holds a vast number of children.

For style generation we follow the [`BEM`](https://getbem.com/) methodology, as suggested by the initial implementation.

The relevant files for this implementation are located inside the `src/components` folder and `src/tools/constants.ts`.

The code is commented in the relevant places for better understanding of each implementation goal.

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `SASS` to build the needed application styles;
-   `DotEnv` to load project environment variables;
-   `Webpack` to bundle the application and serve it in development mode;
-   `PicniCSS` lightweight CSS framework for UI styling;
-   `Statoscope` to generate reports about the application;

## Installation and application bootstrap

From the project root folder, please execute the following commands in a terminal window:

```
npm i
npm start
```
