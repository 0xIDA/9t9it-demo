import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["firewall-routing"].title,
  description: pages["firewall-routing"].description,
};

export default function FirewallRoutingPage() {
  return <ServicePage pageKey="firewall-routing" />;
}
