import CenteredHero from "./component";
import centeredHeroSchema from "./schema.json";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";


const centeredHeroDocumentation = (
  <div className="text-start m-5">
    <h1>{centeredHeroSchema.title}</h1>
    <span className="display-6">{centeredHeroSchema.description}</span>
    <h1 className="mt-5">Examples</h1>
    {centeredHeroSchema.examples.map((example, index) => {
      example.showComponentConfiguration = true;
      return (
        <CenteredHero options={example} />
        );
    })}
    
    <div >
      <h1>Properties</h1>
      Detailed technical description of all the properties of the component.
      <SyntaxHighlighterStandardised
        language="json"
        content={JSON.stringify(centeredHeroSchema.properties, null, " ")}
      />
    </div>
  </div>
);

export default centeredHeroDocumentation;
