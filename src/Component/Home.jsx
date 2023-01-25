import React from 'react'
import vg from "../assets/2.webp"
import{AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";
export default function Home() {
  return (
    <>
        <div className='home' id='home'>
            <main>
              <h1>TechyStar</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia.</p>
            </main>
        
        </div>


        <div className="home2">
            <img src={vg} alt="" />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iusto molestias illum laboriosam impedit. Voluptatibus minus velit esse necessitatibus? Distinctio.
                </p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo earum, numquam vel voluptate quod, natus quaerat illum, facilis necessitatibus quasi perferendis quos officia asperiores dolores? Rem, dolores perferendis non aperiam nemo consequuntur assumenda ab, nam vero velit accusamus numquam cum necessitatibus pariatur dolorum minima explicabo vitae praesentium aliquam minus labore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vero quam voluptatibus, adipisci cum non velit sit? Unde, qui quaerat.</p>
            </div>

        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay:"0.3s",}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay:"0.5s",}}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay:"0.9s",}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay:"1s",}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>

        </div>

    </>
  )
}
