import ClinicsGrid from "./chunks/ClinicsGrid";

export default function ClinicsLocations() {
  return (
    <main className="container mx-auto pb-12 pt-[180px] ">
      <h1 className="mb-6 text-3xl">أماكن العيادات</h1>
      <ClinicsGrid />
    </main>
  );
}
