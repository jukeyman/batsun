import Home11Main from "@/components/layout/main/Home11Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 11 | RJ Business Solutions",
  description:
    "Home 11 by RJ Business Solutions offers premier business consulting services. Discover strategies for growth, efficiency, and success.",
};
export default function Home11() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      bodyBg={"black"}
      headerBg={"black"}
      copyright={2}
    >
      <ThemeController />
      <Home11Main />
    </PageWrapper>
  );
}
