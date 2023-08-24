
import dynamic from 'next/dynamic';
import{ useRouter } from "next/router"
import {useState} from "react"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import workout from '../images/workouts.svg'
import recipes from '../images/recipes.svg'
import weight from '../images/weight.svg'
import person1 from '../images/person1.svg'
import person2 from '../images/person2.svg'
import person3 from '../images/person3.svg'
import styles from'../styles/styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 const router =useRouter()
  const[modalOpen,setModalOpen] = useState(false);
  
  const handleSignup=()=>{
    router.push('/signup')
    // setModalOpen(!modalOpen)
  }
  return (
    // <main className={styles.main}>
          <> 
      <header>
          <div id={styles.bgimg}>
            <div className={styles.content}>
          <h3 className={styles.headertext}>
              The all in platform<br/>
              for your health
              </h3>
              <p className={styles.contenttext}>
              Fitz fitness platform is all you need to start and maintain a healthy lifestyle we offer amazing feautures tailored to you.
              </p>
            <button className={styles.started} onClick={handleSignup}>Get Started</button>
            </div>
           </div>
           </header>
           {/* what we offer section */}
           
            <div className="row">
              <div className={styles.whatweoffer}>
                <h3 className={styles.whatwe_offer_header}> What We Offer</h3>
                <p className={styles.whatwe_offer_text}>more than just another fitness platform</p>
                <div className={styles.whatweoffercontent}>
                <div>
              <Image src={workout} alt="workout image" width={20} height={20}/>
              <p className={styles.workout_header}>GIF Workouts</p><br/>
              <p className={styles.workout_text}>Lack data but still interested in working <br/>out? We’ve got you covered with our new gif workouts, save data and stay fit</p>
              </div>
              <div className="workouts">
              <Image src={recipes} alt="workout image" width={20} height={20}/>
              <p className={styles.workout_header}>Get Recipies</p><br/>
              <p className={styles.workout_text}>Workout is just 20% of the goal, while<br/> healthy eating is 80%, get new and easy recipies here.</p>
              </div>
              <div className="workouts">
              <Image src={weight} alt="workout image" width={20} height={20}/>
              <p className={styles.workout_header}>Check BMI</p><br/>
              <p className={styles.workout_text}>Body mass index is the only way to <br/>know your total fat percentage and what to do next.</p>
              </div>
                </div>
              
              </div>
            </div>
             {/* your body your rules section */}
             <div className="row">
              <div id={styles.bgimg2}>
                <div className="container"> 
                <div className={styles.contents}> 
                <h4 className={styles.yourbody_header}>Your Body Your Rules</h4>
                <p className={styles.yourbody_text}>
                We are all about conforming to your own standards, we just<br/> provide the necessary tools that you need. This is more than <br/>working out or eating right it is a healthy lifestyle, choosing to <br/>live right and making the right decisons, but you are not alone <br/>because we are here, every step of the way.
                </p>
                <button className={styles.startnow}>Start Now</button>
                </div>
              </div>
             </div>
             </div>
             <div className="row">
             
                <div className={styles.testimonials}>
                <h3 className={styles.testimonials_header}> Testimonials</h3>
                <p className={styles.testimonials_text}>see what others have to say about our product </p>
                <div className={styles.testimonialscontent}>
                <div>
              <Image src={person1} alt="workout image" width={150} height={150}/>
              <p className={styles.testify_header}>Farah Muhamed</p><br/>
              <p className={styles.testi_text}>I started using this last year and I can<br/> confidently say it’s my best decision yet.</p>
              </div>
              <div className="workouts">
              <Image src={person2} alt="workout image" width={150} height={150}/>
              <p className={styles.testify_header}>Mark Johnson</p><br/>
              <p className={styles.testi_text}>What more can I say than thanks to<br/> those who made this!</p>
              </div>
              <div className="workouts">
              <Image src={person3} alt="workout image" width={150} height={150}/>
              <p className={styles.testify_header}>Fegor Komaro</p><br/>
              <p className={styles.testi_text}>I met all my fitness goal by using this<br/> playform alone.</p>
              </div>
                </div>
              
              </div>
            
                </div>
             
           <footer className={styles.footer}>
            <div>
            <div className={styles.footercontent}>
              <div className="container">
                <p className={styles.footertext}>Get in Touch</p>
                <p className={styles.footertexts}>We would love to hear from you</p>
                <form className={styles.form}>
                  <input type='text'placeholder='Name' className={styles.input}/>
                  <input type='email'placeholder='Email'className={styles.input} />
                  <textarea className={styles.input}>

                    </textarea>
                    <button className={styles.send}>Send</button>
                </form>
              </div>
              <div className={styles.footer_subscribe}>
              <p className={styles.footertext}>Subscribe</p>
              <p className={styles.footertexts}>Subscribe to our newsletter to get updates</p>
              <div className={styles.subscribecontent}> 
              <input type='email'placeholder='Email'className={styles.input} /> <button className={styles.subscribe}>Subscribe</button>
              </div>
              <p className={styles.copyright}>© Fitz{new Date().getFullYear()} Copyright. All rights reserved.</p>
              </div>
            </div>
            </div>
          
           </footer>
           {/* { modalOpen && <Signup closeModal={()=> setModalOpen(false)}></Signup>} */}
           </>
  
   
  )
}
