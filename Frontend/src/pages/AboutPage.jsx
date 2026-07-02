import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeProvider';

import '../Styles/AboutPage.css';

function AboutPage ()  {
  const {mode} = useContext(ThemeContext);
    console.log(mode)

    const Data = [
                { emoji: '🎯', title: 'Personalized', desc: 'Every student gets a unique roadmap built for their goal and current level.' },
                { emoji: '🤖', title: 'AI-Powered', desc: 'Groq LLaMA3 AI generates roadmaps, answers doubts, and recommends projects.' },
                { emoji: '📈', title: 'Progress-Driven', desc: 'Visual tracking keeps learners motivated and accountable.' },
                { emoji: '🆓', title: 'Free & Open', desc: 'Core features are free. Education should not have a paywall.' },
              ]

    const Tech = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Groq AI', 'JWT Auth', 'Vercel', 'Render'];
            return (
  <>
    <Navbar />
    <main>
      <section className='Skill-section'>
        <div className="Skill-Container" >
          <div className='Skill-badge'>
            <span >🌍 UN Sustainable Development Goal #4</span>
          </div>
          <h1 className='Skill-Goal'>About <span className="Gredent-Color">SkillPath AI</span></h1>
          <p style={{color : mode  ? "#9090b0" : '#5a5a7add'}}>
            SkillPath AI was built to solve a real problem: millions of students want to learn technology skills, but have no structured, personalized guidance. We bridge that gap using AI.
          </p>
        </div>
      </section>


      <section className="Skill-section-second">
        <div className="Data-Container" style={{maxWidth:'900px'}} >
          <div className="Container-Information  " >
            <div className='left'>
              <h2 style={{fontSize:'36px' , fontWeight:'700', lineHeight:'2.1', marginBottom:'16px'}}>Our Mission</h2>
              <p className='ParaSkill' style={{fontSize:'16px', marginBottom:'24px' , color : mode  ? "#9090b0" : '#5a5a7add' , lineHeight:'1.9',fontWeight:'300', fontStyle:'normal'}}>
                We believe every student deserves access to quality, personalized education — regardless of their background or financial situation. SkillPath AI acts as an AI mentor that adapts to each learner's unique goals and pace.
              </p>
              <h2 style={{fontSize:'36px' , fontWeight:'700', lineHeight:'2.1', marginBottom:'16px'}}>SDG 4 Alignment</h2>
              <p style={{fontSize:'16px' , color : mode  ? "#9090b0" : '#5a5a7add', lineHeight:'1.9', fontWeight:'300', fontStyle:'normal'}}>
                Our platform directly supports <strong style={{color:'#00B894' , fontWeight:'600'}}>UN SDG 4 — Quality Education</strong>: ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all. We focus specifically on Target 4.4 (digital and employable skills) and Target 4.b (expanding access to learning opportunities).
              </p>
            </div>
            <div className='right gap-2'>
              {Data.map(({ emoji, title, desc }) => (
                <div key={title} className="Skill-Card" >
                  <span style={{fontSize:'24px'}}>{emoji}</span>
                  <div>
                    <div style={{fontSize:'16px', marginBottom:'4px', fontWeight:'700'}}>{title}</div>
                    <p style={{fontSize:'14px', lineHeight:'1.7', color : mode  ? "#9090b0" : '#5a5a7add'}}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='Technical-Stack' >
            <h2 style={{fontSize:'36px',fontWeight:'700', lineHeight:'1.9', marginBottom:'16px'}}>Tech Stack</h2>
            <div className='badges-container'>
              {Tech.map(tech => (
                <span key={tech} className="badge badge--primary" >{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
)};

export default AboutPage