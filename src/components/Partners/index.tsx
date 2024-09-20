import Partner from "./chunks/Partner";
import { partners } from "./const/partners";
const Partners: React.FC = () => {
  return (
    <div className="container mx-auto pt-16 md:pt-[182px]">
      <h2 className="mb-8  text-2xl font-bold text-[#000C1D]">
        شركائنا
      </h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-6">
        {partners.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
