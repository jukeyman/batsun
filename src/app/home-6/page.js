import Home6Main from "@/components/layout/main/Home6Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 6 | RJ Business Solutions",
  description:
    "Discover RJ Business Solutions' innovative services with our sleek Home 6 layout, showcasing tailored business consulting solutions for your success.",
};

export default function Home6() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <Home6Main />
    </PageWrapper>
  );
}
