import Navbar from "../components/Layout/Navbar";
import HeroSections from '../components/Landing/HeroSections';
import FeatureCard from "../components/Landing/FeatureCard";
import '../Styles/LandingPage.css';
import TestimonialSection from "../components/Landing/TestimonialSection";
import CTABanner from "../components/Landing/CTABanner";
import Footer from "../components/Layout/Footer";
function LandingPage () {

    const features = [
  { icon: '🗺️', title: 'AI Roadmap Generator', description: 'Enter your goal and skill level — get a step-by-step personalized learning roadmap powered by Groq AI in seconds.', color: '#6c63ff22', border:"1px solid #6b63ff36"},
  { icon: '🤖', title: 'AI Doubt Assistant', description: '24/7 AI chat mentor that answers your questions, explains concepts, and helps you stay unstuck at any hour.', color: '#00d4aa22' , border:'1px solid #00d4aa52'},
  { icon: '🚀', title: 'Project Ideas', description: 'Get AI-curated project ideas matched to your exact skill level and learning stage. Build a real portfolio.', color: '#f59e0b22' , border:'1px solid #f59f0b46'},
  { icon: '📊', title: 'Progress Tracking', description: 'Visual dashboards, completion rings, and streak tracking to keep you motivated on your learning journey.', color: '#3b82f622' ,border:' 1px solid #3b83f64f'},
];


  const WorkFeature = [
              { step: '01', title: 'Set Your Goal', desc: 'Choose what you want to learn — Web Dev, Data Science, ML, and more.' },
              { step: '02', title: 'Get Your Roadmap', desc: 'AI generates your personalized step-by-step learning plan instantly.' },
              { step: '03', title: 'Learn & Build', desc: 'Follow the roadmap, chat with AI for doubts, and build real projects.' },
              { step: '04', title: 'Track Progress', desc: 'Check off topics, view your progress ring, and celebrate milestones.' },
            ];

    return (
        <>
        <div>
        <Navbar/>
        <main>
        <HeroSections/>
        <section className="Landing-section-card flex items-center justify-center">
        <div className="card-container">
          <h2 className="section-title px-3">Everything You Need to <span className="Gredent-Color">Learn & Grow</span></h2>
          <p className="section-subtitle">SkillPath AI combines AI intelligence with structured learning to give every student a personalized mentor experience.</p>
          <div className="section-card flex items-center justify-center flex-wrap gap-6">
          {features.map((f) => (
        <div key={f.title} className="card">
        <div className="Card-icon" style={{background: f.color , border : f.border}}>{f.icon}</div>
        <h3 className="Card-tittle">{f.title}</h3>
        <p className="Card-Pra">{f.description}</p>
      </div>
      ))}
      </div>
        </div>
      </section>



      <section className="section-Work" >
        <div className="card-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">From zero to deployed in 4 simple steps.</p>
          <div className="section-card  flex items-center justify-center flex-wrap gap-6">
            {WorkFeature.map( (f) => (
              <div key={f.step} className="card" >
                <div className="Work-Icon , Gredent-Color">{f.step}</div>
                <h3 className="Card-tittle" style={{fontSize:"16px"}}>{f.title}</h3>
                <p className="Card-Pra">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <TestimonialSection/>
            <CTABanner/>
        </main>
        <Footer/>
        </div>
        </>
    )
  }

export default LandingPage;