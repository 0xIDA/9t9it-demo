import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["vet-erp"].title,
  description: pages["vet-erp"].description,
};

export default function VetErpPage() {
  return <ServicePage pageKey="vet-erp" />;
}
