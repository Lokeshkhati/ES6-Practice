// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.
// const title = 'React is awesome'
// const content = 'React is a JavaScript library for building user interfaces.'

import { useState } from "react";

const Article = ({ title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>{title} </h1>
      <button onClick={() => setShow(!show)}>
        {" "}
        {show ? "Show less" : "Show more"}{" "}
      </button>
      {show && <p>{content} </p>}
    </div>
  );
};
export default Article;
