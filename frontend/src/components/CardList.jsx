
import Card from "./Card";

const CardList = ({features}) => {


    console.log("Rerender CardList : ",features)
  return (
    <div className="container mt-4 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map(feature => {
          console.log('from Map',feature)
          return <Card key={feature.id} {...feature} />
        })}
      </div>
    </div>
  );
    
}

export default CardList