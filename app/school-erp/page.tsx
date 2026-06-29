import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["school-erp"].title,
  description: pages["school-erp"].description,
};

export default function SchoolErpPage() {
  return <ServicePage pageKey="school-erp" />;
}
