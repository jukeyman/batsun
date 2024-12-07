import Home4Main from "@/components/layout/main/Home4Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | Home 4",
  description: "Discover innovative strategies and solutions with RJ Business Solutions. Your partner in business growth.",
};

export default function Home4() {
  return (
    <PageWrapper headerStyle={4} footerStyle={4}>
      <ThemeController />
      <Home4Main />
    </PageWrapper>
  );
}
