import ComponentName from "./component";
import ComponentNameSchema from "./schema.json";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";

const componentNameDocumentation = (
  <div className="text-start m-5">
    <h1>{ComponentNameSchema.title}</h1>
    <span className="display-6">{ComponentNameSchema.description}</span>
    <h1 className="mt-5">Examples</h1>
    {ComponentNameSchema.examples.map((example) => {
      example.showComponentConfiguration = true;
      return <ComponentName options={example} />;
    })}
    <div >
      <h1>Properties</h1>
      Detailed technical description of all the properties of the component.
      <SyntaxHighlighterStandardised
        language="json"
        content={JSON.stringify(ComponentNameSchema.properties, null, " ")}
      />
    </div>
  </div>
);

export default componentNameDocumentation;
