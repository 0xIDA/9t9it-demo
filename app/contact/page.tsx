import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["contact"].title,
  description: pages["contact"].description,
};

export default function ContactPage() {
  return <ServicePage pageKey="contact" />;
}
