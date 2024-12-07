import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home | RJ Business Solutions - Onepage Business Consulting",
  description: "Explore RJ Business Solutions' one-page platform offering exceptional business consulting services tailored to your needs.",
};

export default function Home2Onepage() {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} isOnepage={true}>
      <ThemeController />
      <Home2Main />
    </PageWrapper>
  );
}
