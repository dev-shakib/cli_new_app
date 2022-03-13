import { Card, EmptyState, Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";

// import React from 'react';
import React, { useEffect, useState } from "react";
// import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import ProductEmptyState from "./components/ProductEmptyState";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]);
  useEffect(() => {
    const ids = products.map((product) => {
      return {
        id: product.id,
      };
    });
    setProductsId(ids);
  }, [products]);

  function handleProductSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
    console.log(payload);
  }
  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productsId}
      />
      {products.length > 0 ? (
        <ProductPage setIsOpen={setIsOpen} products={products} />
      ) : (
        <ProductEmptyState setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default index;
