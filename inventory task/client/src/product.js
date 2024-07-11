
import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from './sidebar';

export default function Product() {
  const { showProduct } = useContext(SidebarContext);

  if (!showProduct) return null;

  return (
    <div className="product-component">
      Product component
    </div>
  );
}