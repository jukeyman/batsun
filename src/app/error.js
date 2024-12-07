"use client";
import ErrorMain from "@/components/layout/main/ErrorMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Error | RJ Business Solutions",
  description: "An error has occurred. Please contact RJ Business Solutions for support or try again later.",
};

export default function Error() {
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
