import Home12Main from "@/components/layout/main/Home12Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 12 Onepage | RJ Business Solutions",
  description:
    "Explore Home 12 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home12Onepage() {
  return (
    <PageWrapper isOnepage={true} home={12}>
      <ThemeController />
      <Home12Main />
    </PageWrapper>
  );
}