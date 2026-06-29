import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["debt-collection"].title,
  description: pages["debt-collection"].description,
};

export default function DebtCollectionPage() {
  return <ServicePage pageKey="debt-collection" />;
}
