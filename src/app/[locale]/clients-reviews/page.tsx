import CustomerReviews from "@/components/CustomerReviewsGrid";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
    title: "Clients reviews",
    description: "NEXT js",
    // other metadata
};

export default function Home({ params: { locale } }) {
    unstable_setRequestLocale(locale);

    return (
        <>
            <CustomerReviews />
        </>
    );
}
