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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">RJ Business Solutions</h1>
          <p className="text-xl">Welcome to our site</p>
        </div>
      </main>
    </PageWrapper>
  );
}
