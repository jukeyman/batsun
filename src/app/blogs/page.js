import BlogsMain from "@/components/layout/main/BlogsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Blogs | RJ Business Solutions",
  description:
    "Discover insightful blogs from RJ Business Solutions. Stay updated with the latest trends, strategies, and tips to empower your business success.",
};

export default function Blogs() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <BlogsMain />
    </PageWrapper>
  );
}
