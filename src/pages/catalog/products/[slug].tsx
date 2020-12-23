import {useRouter} from 'next/router'
import { useState } from 'react';
import dynamic from 'next/dynamic';

const AddToCartModal = dynamic(
  () => import('@/components/AddToCartModal'),
  { loading: () => <p>Loading...</p>, ssr: false } // ssr: false, diz que vai ser redenrizado somente no lado do cliente, pq assim conseguimos usar as variaveis globais presentes no browser, como document, window etc
) 

export default function Product(){

const router = useRouter()
const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);


  function handleAddToCart() {
    setIsAddToCartModalVisible(true);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      { isAddToCartModalVisible && <AddToCartModal /> }
    </div>
  );
}