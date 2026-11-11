import { LifetimeDeal } from '@gitroom/frontend/components/billing/lifetime.deal';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Foretell | Plano vitalício',
  description: '',
};
export default async function Page() {
  return <LifetimeDeal />;
}
