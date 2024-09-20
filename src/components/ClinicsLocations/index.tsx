import ClinicsGrid from "./chunks/ClinicsGrid";

export default function ClinicsLocations() {
  return (
    <main className="container mx-auto pb-6 md:pb-12 pt-9 md:pt-[100px] ">
      <h1 className="mb-3 text-2xl font-semibold md:font-normal md:text-3xl md:mb-6">أماكن العيادات</h1>
      <ClinicsGrid />
    </main>
  );
}
