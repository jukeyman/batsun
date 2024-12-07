import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | AI, Bots & Business Automation",
  description: "Transform your business with cutting-edge AI solutions, chatbots, and automation services. From customer support to workflow optimization, we deliver intelligent solutions for modern businesses.",
};

export default function Home() {
  return (
    <PageWrapper>
      <ThemeController />
      <IndexMain />
    </PageWrapper>
  );
}
