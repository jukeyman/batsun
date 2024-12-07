import LoginMain from "@/components/layout/main/LoginMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Login | RJ Business Solutions",
  description:
    "Access your account at RJ Business Solutions. Log in to explore tailored business consulting services and solutions for your growth.",
};

export default function Login() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <LoginMain />
    </PageWrapper>
  );
}
