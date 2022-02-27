import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({children}){
  return(
    <>
      <Navbar/>
      <div>
        {children}
      </div>
      <Footer/>
    </>
  )
}