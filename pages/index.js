import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

// import React from 'react';
import React, { useState } from 'react';
import ProductList from "./components/ProductList";


function index() {
  const [isOpen, setIsOpen] = useState(false);
  const[products, setProducts] = useState([]);
  function handleProductSelection(payload){
    setIsOpen(false);
    setProducts(payload.selection);
    console.log(payload);
  }
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Product",
        onAction: () => setIsOpen(true),
      }}
    >
      <p>Page content</p>
      <ResourcePicker
      resourceType="Product"
      open={isOpen}
      onCancel={ () => setIsOpen(false)}
      onSelection={handleProductSelection}
      />
      {products.map(product => <div>{product.title}, {product.status}</div>)}

     <ProductList products={products} />
    </Page>
  );
}

export default index;


// video no 10 start 