import Home8Main from "@/components/layout/main/Home8Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 8 Onepage | RJ Business Solutions",
  description:
    "Explore Home 8 Onepage by RJ Business Solutions, offering seamless business consulting solutions in a sleek onepage design.",
};

export default function Home8Onepage() {
  return (
    <PageWrapper
      headerStyle={3}
      headerBg={"black"}
      footerStyle={2}
      isOnepage={true}
      headerType={3}
    >
      <ThemeController />
      <Home8Main />
    </PageWrapper>
  );
}