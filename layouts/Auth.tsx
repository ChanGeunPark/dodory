import Navbar from '../components/Navbar'




export default function Auth({ children }){
  return(
    <div className="min-h-screen">
    <Navbar/>
      <main className='bg-gray-400 '>
        <section className="relative w-full h-full py-40">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          ></div>
          {children}
        </section>
      </main>
    </div>
  )

}