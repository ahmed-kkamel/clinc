import ClientReviewsSlider from "./chunks/ClientReviewsSlider";

export default function ClientReview() {
  return (
    <section className="container mx-auto pt-[182px] ">
      <h2 className="mb-6 text-3xl">أراء عملاؤنا</h2>
      <ClientReviewsSlider />
    </section>
  );
}
