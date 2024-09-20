import Card from "./Card";
import { ClinicsCardsData } from "../const/ClinicsCard";

const ClinicsGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2">
        {ClinicsCardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ClinicsGrid;
