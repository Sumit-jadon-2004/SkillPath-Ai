import '../../Styles/TestimonialSection.css';

function TestimonialSection() {
  const testimonials = [
    { name: "Rahul S.", logo:'RS', role: "Computer Science Student", quote: "SkillPath AI gave me a clear roadmap when I was completely lost. The AI chat answered every doubt I had at 2 AM!" },
    { name: "Priya M.",  logo:'PM', role: "Self-taught Developer", quote: "I generated my roadmap and built 3 projects following it. Got my first internship within 4 months!" },
    { name: "David K.",  logo:'DK', role: "High School Teacher", quote: "Switched from marketing to data science using this platform. The personalized plan made all the difference." }
  ];

  return (
    <section className="testimonials-section">
      <div className='card-container'> 
      <h2 className='section-title px-4'>What Our <span className="gradient-text">Students Say</span></h2>
      <p className='section-subtitle'>Real results from real learners on their journey to becoming developers.</p>
      <div className="section-card flex items-center justify-center flex-wrap gap-6">
      {testimonials.map( (k) =>(
        <div key={k.name} className='Student-card'>
          <div className='Card-collen'>"</div>
          <p className='Card-Pra' style={{textAlign:'start' , marginBottom:'24px'}}>{k.quote}</p>
          <div className='profile-Student gap-4'>
            <div className='Name-Logo'>{k.logo}</div>
            <div>
              <div className='Student-name'>{k.name}</div>
              <div className='Student-role'>{k.role}</div>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </section>
  );
}

export default TestimonialSection;