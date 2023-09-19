
import Card from "./Card";

const CardList = ({features}) => {


    console.log("Rerender CardList : ",features)
  return (
    <div className="container mx-auto">
        {features.map(feature => {
          console.log('from Map',feature)
          return <Card key={feature.id} {...feature} />
        })}
    </div>
  );
    
}

export default CardList