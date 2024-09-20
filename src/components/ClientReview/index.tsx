import ClientReviewsSlider from "./chunks/ClientReviewsSlider";

export default function ClientReview() {
  return (
    <section className="container mx-auto pb-8 md:pb-[118px] pt-16 md:pt-[182px]">
      <h2 className="mb-6 text-2xl md:text-3xl">أراء عملاؤنا</h2>
      <ClientReviewsSlider />
    </section>
  );
}
