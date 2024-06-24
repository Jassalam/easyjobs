import Hero from "./components/Hero";
import HeadMenu from "./components/HeadMenu";


export default function Home() {
  return (
    <>
     
      <Hero />
      <HeadMenu/>
      <section className='text-center my-8'>
        <h1 className='text-primary font-semibold'>Contact Us</h1>
        <div className='mt-8'>
        <a className='text-4xl underline text-gray-500' href='tel:+49178787825'>
          +49 178 452 458
        </a></div>
      </section>

     

    </>
  );
}
