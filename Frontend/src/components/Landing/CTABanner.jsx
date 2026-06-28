
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import '../../Styles/CtABanner.css';

function CTABanner() {
  return (
    <section className="Landing-section-card py-4">
      <div className='card-container'>
        <div className='card-Learning'>
        <div className='flex flex-col items-center'>
          <h2 className='CTA-Tittle'>Ready to Build Your <span className='Gredent-Color'>Learning Path?</span></h2>
          <p className='section-subtitle' style={{fontSize:'18px'}}>Join thousands of students who use SkillPath AI to learn faster, build projects, and land their dream jobs.</p>
          <div className='flex'>
              <Link to={'/Register'} className='flex items-center justify-center Join-btn'>Get Your Free Roadmap<FiArrowRight /></Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;