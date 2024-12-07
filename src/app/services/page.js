import ServiceMain from "@/components/layout/main/ServiceMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Services | RJ Business Solutions",
  description:
    "Explore the expert services provided by RJ Business Solutions. Tailored strategies for business growth and operational success.",
};

export default function Services() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ServiceMain />
    </PageWrapper>
  );
}
