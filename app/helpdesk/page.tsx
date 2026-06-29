import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["helpdesk"].title,
  description: pages["helpdesk"].description,
};

export default function HelpdeskPage() {
  return <ServicePage pageKey="helpdesk" />;
}
