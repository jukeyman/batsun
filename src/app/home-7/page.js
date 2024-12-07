import Home7Main from "@/components/layout/main/Home7Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 7 | RJ Business Solutions",
  description:
    "Discover RJ Business Solutions Home 7 layout, tailored for professional consulting services to help you achieve business excellence.",
};

export default function Home7() {
  return (
    <PageWrapper headerStyle={3} headerBg={"black"}>
      <ThemeController />
      <Home7Main />
    </PageWrapper>
  );
}
