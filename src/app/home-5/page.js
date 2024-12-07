import Home5Main from "@/components/layout/main/Home5Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | Home 5",
  description:
    "Discover tailored solutions for your business challenges with RJ Business Solutions. Elevate your operations effortlessly.",
};

export default function Home5() {
  return (
    <PageWrapper headerStyle={3} footerStyle={2} headerBg={"black"}>
      <ThemeController />
      <Home5Main />
    </PageWrapper>
  );
}
