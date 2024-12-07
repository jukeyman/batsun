import CheckoutMain from "@/components/layout/main/CheckoutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Checkout | RJ Business Solutions",
  description:
    "Secure and seamless checkout with RJ Business Solutions. Complete your transaction efficiently and access the best business services and solutions.",
};

export default function Checkout() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <CheckoutMain />
    </PageWrapper>
  );
}
