import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// commented Prism as it wasa not giving colors in code.
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighter from "react-syntax-highlighter";

const installation = (
  <div>
    <h1 id="installation">Installation</h1>
    <p>
      Open a terminal window on your MacBook (or Ubuntu/Linux etc) or command
      prompt on windows
    </p>
    <p>
      Go to the folder where you want to set up the site using{" "}
      <strong>cd folder-path</strong> command
    </p>
    <SyntaxHighlighter language="bash" style={dark}
      wrapLines={true} 
      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
      >        
        {
`# download website project
git clone https://github.com/Mohit-Shukla-EQ/website.git 
# install the website
npm install
# run it
npm start`
        }
    </SyntaxHighlighter>
    <p>
       Open (
      <a href="http://localhost:3000" id="isPasted">
        http://localhost:3000
      </a>
      ) and see your website running. Use your own IP and port if it&#39;s
      different.
    </p>
  </div>
);

export default installation;
