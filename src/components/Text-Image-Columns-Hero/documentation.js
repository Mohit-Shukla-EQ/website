import TextImageColumnsHero from "./component";
import TextImageColumnsHeroSchema from "./definition.json";
import SyntaxHighlighterStandardised from "components/SyntaxHighlighter-Standardised/SyntaxHighlighter-Standardised";
import log from "libraries/Log";

const TextImageColumnsHeroDocumentation = (
  <div className="text-start m-5">
    <h1>{TextImageColumnsHeroSchema.title}</h1>
    <span className="display-6">{TextImageColumnsHeroSchema.description}</span>
    <h1 className="mt-5">Examples</h1>
    {TextImageColumnsHeroSchema.examples.map((example) => {
      example.showComponentConfiguration = true;
      log.write(
        2,
        "TextImageColumnsHeroDocumentation",
        "const",
        example,
        "before return"
      );
      return (
        <div>
          <TextImageColumnsHero options={example} />
          <div id={"json-index"}>
          <SyntaxHighlighterStandardised
            language="json"
            content={JSON.stringify(example, null, " ")}
          />
          </div>
        </div>
      );
    })}
    <div>
      <h1>Properties</h1>
      Detailed technical description of all the properties of the component.
      <SyntaxHighlighterStandardised
        language="json"
        content={JSON.stringify(
          TextImageColumnsHeroSchema.properties,
          null,
          " "
        )}
      />
    </div>
  </div>
);

export default TextImageColumnsHeroDocumentation;
