import React from 'react';
import './BlogQA.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
const BlogQA = () => {
    const myText =
        `import { useState } from 'react';

    function Example() {
      const [isActive, setIsActive] = useState(false);
    
      const handleClick = () => {
        setIsActive(!isActive);
      };
    
      return (
        <button onClick={handleClick}>
          {isActive ? 'Active' : 'Inactive'}
        </button>
      );
    }`
    
    return (
        <div className='QAContainer'>
            <h3>1. Props Vs State</h3>
            <p>gnkdjfgkdjn</p>

            <h3>2. How does useState work?</h3>
            <p>useState is a hook provided by React that allows functional components to manage state.

                When you use the useState hook, you call it with an initial value, and it returns an array with two values: the current state value, and a function to update that value. React will automatically re-render the component when the state value changes, so you can use the current state value to render different content depending on its value.

            </p>
            <SyntaxHighlighter language="jsx" style={vs}>
                {myText.trim()}
            </SyntaxHighlighter>

            <h3>3. Purpose of useEffect other than fetching data</h3>

            <h3>4. How Does React work?</h3>

        </div>
    );
};

export default BlogQA;