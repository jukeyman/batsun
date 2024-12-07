import ProjectsMain from "@/components/layout/main/ProjectsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Projects | RJ Business Solutions",
  description:
    "Explore the diverse range of successful projects by RJ Business Solutions. Learn how we deliver tailored strategies for business excellence.",
};

export default function Projects() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ProjectsMain />
    </PageWrapper>
  );
}
