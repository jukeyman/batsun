import Home4Main from "@/components/layout/main/Home4Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | Home 4 Onepage",
  description: "Explore comprehensive business solutions with RJ Business Solutions. Simplify your growth journey.",
};

export default function Home4Onepage() {
  return (
    <PageWrapper headerStyle={4} footerStyle={4} isOnepage={true}>
      <ThemeController />
      <Home4Main />
    </PageWrapper>
  );
}
