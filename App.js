// 1. render below
/*
  <h1>Hello world from React!</h1>
*/

// const heading = React.createElement("h1", {}, "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// assigning attributes to the h1 element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// 2. render below
/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
  </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 3. render below
/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 4. render below
/*
<div id="parent">
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>
*/

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag of child 1"),
//     React.createElement("h2", {}, "I am h2 tag of child 1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag of child 2"),
//     React.createElement("h2", {}, "I am h2 tag of child 2"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
