import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["optometry-erp"].title,
  description: pages["optometry-erp"].description,
};

export default function OptometryErpPage() {
  return <ServicePage pageKey="optometry-erp" />;
}
