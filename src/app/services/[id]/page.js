import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllServices from "@/libs/getAllServices";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Service Details | RJ Business Solutions",
  description:
    "Discover the comprehensive range of services offered by RJ Business Solutions. Tailored solutions to meet your business needs and drive success.",
};

const services = getAllServices();

export default function ServicesDetails({ params }) {
  const { id } = params;
  const isExistService = services?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistService) {
    notFound();
  }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ServiceDetailsMain />
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return services?.map(({ id }) => ({ id: id.toString() }));
}
