import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["saudi-aramco-ccc"].title,
  description: pages["saudi-aramco-ccc"].description,
};

export default function SaudiAramcoCccPage() {
  return <ServicePage pageKey="saudi-aramco-ccc" />;
}
