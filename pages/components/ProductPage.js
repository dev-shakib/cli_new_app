import { Page } from "@shopify/polaris";
import React from "react";
import ProductList from "./ProductList";

function ProductPage({ setIsOpen, products }) {
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select Product",
        onAction: () => setIsOpen(true),
      }}
    >
      {/* <p>Page content</p> */}

      {/* {products.map(product => <div>{product.title}, {product.status}</div>)} */}

      <ProductList products={products} />
    </Page>
  );
}

export default ProductPage;
