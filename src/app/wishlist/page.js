import TeamMain from "@/components/layout/main/TeamMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Our Team | RJ Business Solutions",
  description:
    "Meet the dedicated team behind RJ Business Solutions. Discover how our experts drive innovative solutions for business success.",
};

export default function Team() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <TeamMain />
    </PageWrapper>
  );
}
