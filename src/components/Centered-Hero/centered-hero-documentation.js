import CenteredHero from "./Cenetered-Hero";
import centeredHeroSchema from './centered-hero-schema.json'

const centeredHeroDocumentation = (
  <div>
    <h1>{centeredHeroSchema.title}</h1>
    <span className="display-6">{centeredHeroSchema.description}</span>
    <h1 className="mt-5">Examples</h1>

    {
        centeredHeroSchema.examples.map(example => {
            example.showComponentConfiguration = true
            return(
                <CenteredHero options={example}/>
            )
        })
    }
    {/* <CenteredHero options={centeredHeroSchema.examples[0]}/>
    {centeredHeroSchema.examples[0].showComponentConfiguration = true} */}
  </div>
);

export default centeredHeroDocumentation;
