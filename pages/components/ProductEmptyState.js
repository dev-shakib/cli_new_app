import { Card, EmptyState } from "@shopify/polaris";
import React from "react";

function ProductEmptyState({ setIsOpen }) {
  return (
    <Card sectioned>
      <EmptyState
        heading="Manage your store products"
        action={{
          content: "Select Products",
          onAction: () => setIsOpen(true),
        }}
        secondaryAction={{
          content: "Learn more",
          url: "https://help.shopify.com",
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Select the product you want here </p>
      </EmptyState>
    </Card>
  );
}

export default ProductEmptyState;
