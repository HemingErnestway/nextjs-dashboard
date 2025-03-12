import Form from '@/src/ui/invoices/create-form';
import Breadcrumbs from '@/src/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/src/lib/data';
 
const Page = async () => {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Create Invoice', href: '/dashboard/invoices/create', active: true },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}

export default Page;
