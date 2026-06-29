import { ServicePage } from "@/components/ServicePage";
import { pages } from "@/lib/site";

export const metadata = {
  title: pages["hr-payroll-erp"].title,
  description: pages["hr-payroll-erp"].description,
};

export default function HrPayrollErpPage() {
  return <ServicePage pageKey="hr-payroll-erp" />;
}
