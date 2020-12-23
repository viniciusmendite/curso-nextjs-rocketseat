import SEO from '@/components/SEO';
import { GetServerSideProps } from 'next';
import {Title} from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface IHomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: IHomeProps) {
  
  async function handleSum() {
    const math = (await import('../lib/math')).default; 

    console.log(math.sum(4, 2));
  }

  return (
    <div>
      <SEO 
      title="DevCommerce, your best e-commerce!" 
      image="boost.png"
      shouldExcludeTitleSuffix/>

      <section>
        <Title>Produtos</Title> 

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>
      </section> 

      <button type="button" onClick={handleSum}>Somar</button>  
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();
  
  return {
    props: {
      recommendedProducts
    }
  }
}
