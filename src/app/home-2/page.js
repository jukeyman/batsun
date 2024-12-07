import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | Comprehensive Business Consulting",
  description: "Welcome to RJ Business Solutions. We offer tailored business consulting solutions to drive your success and streamline your operations.",
};

export default function Home2() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2}>
      <ThemeController />
      <Home2Main />
    </PageWrapper>
  );
}
