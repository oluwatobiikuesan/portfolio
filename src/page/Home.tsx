import HeroPage from '../component/heropage';

export default function Home() {
  // let item = "i am a software engineer. i am a computer science student. i am a graphics designer."
  return (
    <main className='home'>
    <section className='text-white
        bg-black backdrop-blur-2xl'>
    <HeroPage/>
</section>
    </main>
  )
}