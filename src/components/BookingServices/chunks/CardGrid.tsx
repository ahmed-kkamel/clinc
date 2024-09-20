import Card from "./Card";
import { cards } from "../const/cards";

const CardGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
