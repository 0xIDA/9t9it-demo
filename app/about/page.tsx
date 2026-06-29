import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["about"].title,
  description: pages["about"].description,
};

export default function AboutPage() {
  return <ServicePage pageKey="about" />;
}
