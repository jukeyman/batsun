import ErrorMain from "@/components/layout/main/ErrorMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Page Not Found | RJ Business Solutions",
  description: "The requested page could not be found - RJ Business Solutions",
};
export default function notFound() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ErrorMain />
    </PageWrapper>
  );
}
