import Home7Main from "@/components/layout/main/Home7Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 7 Onepage | RJ Business Solutions",
  description:
    "Explore RJ Business Solutions Home 7 Onepage layout. Simplified and streamlined for all your consulting needs, ensuring excellence and precision.",
};

export default function Home7Onepage() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"} isOnepage={true}>
      <ThemeController />
      <Home7Main />
    </PageWrapper>
  );
}
