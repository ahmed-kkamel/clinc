import Image from "next/image";
import { reviews } from "../ClientReview/const/reviews";

const CustomerReviews = () => {
    return (
        <section className="container py-4 md:py-10">
            <h2 className="text-2xl md:text-3xl font-medium md:font-semibold text-[#093448] md:mb-12 mb-5">
                آراء عملائنا
            </h2>
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className=" flex bg-[#000C1D] p-4 md:p-6 rounded-lg shadow-md min-h-48 md:min-h-60"
                        >
                            {/* Decorative Corner Elements */}
                            {/* <div className="absolute top-[-10px] left-[-10px] w-12 h-12 bg-[#5691AD] rounded-full"></div>
                            <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-[#B8E2F6] rounded-full"></div> */}

                            <div className="flex items-start gap-4 md:items-center">
                                {/* Customer Image */}
                                <Image
                                    src={review.imageSrc}
                                    alt={review.name}
                                    className="w-20 h-20 rounded-lg md:w-40 md:h-40"
                                    width={96}
                                    height={96}
                                />
                                <div className="flex flex-col">
                                    {/* Customer Name */}
                                    <h3 className="text-lg font-semibold text-[#B8E2F6]">
                                        {review.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <span key={i} className="text-lg text-yellow">
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="mt-2 text-[#B8E2F6] text-sm leading-relaxed">
                                        {review.reviewText}
                                    </p>
                                </div>
                            </div>

                            {/* More Decorative Elements */}
                            {/* <div className="absolute top-[10px] right-[10px] w-6 h-6 bg-[#5691AD] rounded-full"></div>
                            <div className="absolute bottom-[10px] left-[10px] w-6 h-6 bg-[#B8E2F6] rounded-full"></div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
