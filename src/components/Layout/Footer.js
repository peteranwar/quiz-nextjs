import Image from "next/image"
import Link from "next/link"
import { BsFillTelephoneFill } from 'react-icons/bs'
export const Footer = (props) => (
   <footer className="py-4">
      <div className="container" >
         <div className="row">
            <div className="col-lg-4 my-3 ">
               <Image
                  src="/assets/images/footer_logo.png"
                  width="250px"
                  height="50px"
                  alt="master linux-logo"
               />
               <p className="description">
                  Master Linux is one of the pioneering companies in the ME region working in IT Services and Training. We don’t just design and implementing IT Solutions and develop your IT Services management and governance environment, but we transform them to powerful business channels to be a powerful tool for promoting a business and a source for generating new business leads.
               </p>
               <div className="d-flex">
                  <BsFillTelephoneFill color="blue" size="1.2em" />
                  <div className="">
                     <a href="tel:+202 26908794" className="phone d-block mx-2">  +202 26908794</a>
                     <a href="mailto:+sales@masterlinux.net" className="mail mx-2">+sales@masterlinux.net</a>
                  </div>
               </div>
            </div>
            <div className="col-lg-8 my-3">
               <div className="row">
                  <div className="col-sm-4 col-6 my-2">
                     <h4 className="main-header mb-4">
                        Follow us
                     </h4>
                     <ul className="list-unstyled">
                        <li >
                           <Link href="">
                              <a >Facebook </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-4 col-6 my-2">
                     <h4 className="main-header mb-4">
                        Follow us
                     </h4>
                     <ul className="list-unstyled">
                        <li >
                           <Link href="">
                              <a >Facebook </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-4 col-6 my-2">
                     <h4 className="main-header mb-4">
                        Follow us
                     </h4>
                     <ul className="list-unstyled">
                        <li >
                           <Link href="">
                              <a >Facebook </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                        <li >
                           <Link href="/login">
                              <a > Linkedin </a>
                           </Link>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>

         </div>
      </div>


   </footer>
)
