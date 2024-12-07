import Home15Main from "@/components/layout/main/Home15Main";

import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Home 15 One page | RJ Business Solutions",
  description:
    "Explore Home 15 by RJ Business Solutions for innovative and comprehensive business consulting services. Designed to elevate your success.",
};
export default function Home15() {
  return (
    <PageWrapper
      headerStyle={4}
      footerStyle={4}
      headerType={3}
      bodyBg={"black"}
    >
      <ThemeController />
      <Home15Main />
    </PageWrapper>
  );
}
