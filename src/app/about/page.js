import AboutMain from "@/components/layout/main/AboutMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "About Us | RJ Business Solutions",
  description:
    "Learn more about RJ Business Solutions. We are industry leaders in business consulting, offering comprehensive services to empower entrepreneurs and organizations.",
};

export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <AboutMain />
    </PageWrapper>
  );
}
