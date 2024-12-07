import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Home 1 Onepage | RJ Business Solutions",
  description:
    "Discover Home 1 Onepage by RJ Business Solutions, offering tailored business consulting solutions to drive your success and efficiency.",
};
export default function HomeOnepage() {
  return (
    <PageWrapper isOnepage={true}>
      <ThemeController />
      <IndexMain />
    </PageWrapper>
  );
}
