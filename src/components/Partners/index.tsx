import Partner from "./chunks/Partner";
import { partners } from "./const/partners";
const Partners: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="mb-8 text-right text-2xl font-bold text-[#000C1D]">
        شركائنا
      </h2>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
        {partners.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
