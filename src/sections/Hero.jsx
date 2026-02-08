import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'


const Hero = () => {
  return (
     <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="./images/bg.png" alt="background" />

        </div>

        <div className='hero-layout'>
            {/*LEFT: HERO CPNTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-10 px-5'>
                <div className='flex flex-col gap-4'>
                    <div className='hero-text'>
                      <h1>Transformando
                         <span className='slide'>
                          <span className='wrapper'>
                            {words.map((word) => (
                                <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />

                                    <span>{word.text}</span>

                                </span>
                            ))}
                            
                          </span>
                         </span>  
                      </h1>  

                      
                      <h1>em projetos reais</h1>
                      <h1>que entregam resultado</h1>
                    </div>
                    <p className='text-white-50 md: text-xl relative z-10 pointer-events-none'>
                        Olá, eu sou Marina Mariana, uma desenvolvedora brasileira com paixão por códigos.
                      </p>

                      <Button 
                      className="md:w-80 md:h-16 w-75 h-12"
                      id="button"
                      text="Veja meu trabalho" 
                       />

                </div>
            </header>
            {/*RIGHT: 3D MODEL*/}
            <figure>
                <div className='hero-3d-layout'>
                  <HeroExperience/>
                </div>
            </figure>

        </div>
     </section>
  )
}

export default Hero