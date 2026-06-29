import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["hospital-erp"].title,
  description: pages["hospital-erp"].description,
};

export default function HospitalErpPage() {
  return <ServicePage pageKey="hospital-erp" />;
}
