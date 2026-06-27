import { FiArrowRight } from "react-icons/fi";

function HeroSection() {
  return (
    <section className='flex items-center justify-center gap-20 flex-wrap section-Hero' >
      <div className='Hero-content '>
        <h1 >Learn Smarter <br /> with <span className="Gredent-Color">AI-Powered</span><br />Roadmaps</h1>
        <p>Get a personalized learning roadmap built by AI, chat with your AI mentor 24/7, discover real project ideas, and track every step of your progress.</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 Hero-Button">Start Learning Free <FiArrowRight /></button>
        <button className="btn-learnMore">Learn More</button>
      </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='Outer-Card'>
      <div className='Hero-Edu-card'>
        <div className='Card-Points gap-2'>
          <div className='Point-one'></div>
          <div className='Point-two'></div>
          <div className='Point-three'></div>
        </div>
        <div className='text-xs Hero-card-Title'>AI Roadmap Generated ✨</div>
        <div className='Card-line'>
          <div className='Point-inLines'>✓</div>
          <div className='Point-data'>HTML & CSS Bsics</div>
        </div>
        <hr className='Bottom-Line'/>
         <div className='Card-line'>
          <div className='Point-inLines'>✓</div>
          <div className='Point-data'>JavaScript Core</div>
        </div>
        <hr className='Bottom-Line'/>
         <div className='Card-line'>
          <div className='Point-inLines-bottom'>3</div>
          <div className='Point-data-bottom'>React Fundamentals</div>
        </div>
        <hr className='Bottom-Line'/>
        <div className='Card-line'>
          <div className='Point-inLines-bottom'>4</div>
          <div className='Point-data-bottom'>Node.js & Express</div>
        </div>
        <hr className='Bottom-Line'/>
        <div className='Card-line'>
          <div className='Point-inLines-bottom'>5</div>
          <div className='Point-data-bottom'>MongoDB & Deploy</div>
        </div>
        <hr className='Bottom-Line'/>
        </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;