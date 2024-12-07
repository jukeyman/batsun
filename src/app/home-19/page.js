import Home19Main from "@/components/layout/main/Home19Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 19 One page | RJ Business Solutions",
  description:
    "Explore Home 19 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home19() {
  return (
    <PageWrapper>
      <ThemeController />
      <Home19Main />
    </PageWrapper>
  );
}
