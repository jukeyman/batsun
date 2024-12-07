export async function generateStaticParams() {
  // For now, we'll generate static paths for a few sample products
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default function ProductPage({ params }) {
  const products = {
    '1': { name: 'AI Business Assistant', price: '$299/month', description: 'Automated business management solution' },
    '2': { name: 'HR Management Suite', price: '$199/month', description: 'Complete HR and payroll solution' },
    '3': { name: 'Business Formation Package', price: '$499', description: 'Complete business setup service' }
  };

  const product = products[params.id];

  if (!product) {
    return (
      <div className="container py-8">
        <h1>Product Not Found</h1>
        <p>The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-page py-8">
      <div className="container">
        <h1>{product.name}</h1>
        <p className="text-xl font-bold mt-4">{product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
}
