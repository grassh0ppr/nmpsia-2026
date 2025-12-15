class InPersonTrainings extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    
    <div class="header-flex">
    <h2 class="matchd-content-heading ps-0" style="margin: 0">
      In-Person Training Courses
    </h2>
    <img
      src="images/Logo_POMS.png"
      alt="poms logo"
      class="carrier-logo"
    />
  </div>
  <h4 class="py-3">Loss Prevention Courses</h4>
  <p>
    Contact: Larry Vigil, Sr. Manager, Risk Services -
    <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
  </p>
  <ul>
    <li>Accident Investigation (OSHA)</li>
    <li>Aerial and Scissor Lifts (Certification)</li>
    <li>Bloodborne Pathogens</li>
    <li>Chemical Hygiene and Laboratory Safety</li>
    <li>Defensive Driving (Certification)</li>
    <li>Distracted Driving</li>
    <li>Electrical Safety</li>
    <li>Fall Protection</li>
    <li>First Aid/CPR/AED (Certification)</li>
    <li>Forklift Safety (Certification)</li>
    <li>General Workplace Safety</li>
    <li>Hazard Communication</li>
    <li>Housekeeping and Storage Practices</li>
    <li>Kitchen Safety</li>
    <li>Ladder Safety</li>
    <li>Material Handling and Lifting Techniques</li>
    <li>Mental Health First Aid and Suicidal Awareness (YMHFA®)</li>
    <li>Narcan® Training (Opioid Overdose)</li>
    <li>
      National Fire Protection Association (NFPA) Life Safety Codes
    </li>
    <li>OSHA 10® (Certification)</li>
    <li>OSHA 30® (Certification)</li>
    <li>Personal Protective Equipment (PPE)</li>
    <li>Playground Safety and Maintenance</li>
    <li>Stop The Bleed® (Certification)</li>
    <li>Suicide Awareness, Gate Keeper Program</li>
  </ul>

  <h4 class="py-3">Safety and Security Courses</h4>
  <p>
    James Vautier, Sr. Manager, Safety & Security -
    <a href="mailto:jvautier@pomsassoc.com">jvautier@pomsassoc.com</a>
  </p>
  <p>
    Darron Walter, Loss Prevention Specialist -
    <a href="mailto:dwalter@pomsassoc.com">dwalter@pomsassoc.com</a>
  </p>
  <p>
    Grant Banash, Sr. Manager, Technology/Cybersecurity -
    <a href="mailto:gbanash@pomsassoc.com">gbanash@pomsassoc.com</a>
  </p>
  <ul>
    <li>Active Shooter Response (ALICE®)</li>
    <li>Active Shooter Response (AVERT®)</li>
    <li>Active Shooter Response (Loud Noise Practical)</li>
    <li>Active Shooter Response (Overview)</li>
    <li>Active Shooter Response (Room Defense Practical)</li>
    <li>Active Shooter Response (Room Fortification)</li>
    <li>Behavior Threat Assessment/Management (Overview)</li>
    <li>Behavior Threat Assessment/Management (Program Development)</li>
    <li>Bomb Threat Response (Civilian Staff)</li>
    <li>Bomb Threat Response (Security Staff)</li>
    <li>Continuity of Operations</li>
    <li>Cybersecurity Awareness</li>
    <li>De-escalation (Staff)</li>
    <li>Drug Trends & Physiology (Signs/Symptoms)</li>
    <li>Family Reunification (Overview)</li>
    <li>Family Reunification (Program Development)</li>
    <li>Incident Command System (ICS) for Schools</li>
    <li>PREPaRE® - School Crisis Prevention/Intervention</li>
    <li>Responding to Crisis (Scenario Based Training)</li>
    <li>Restorative Practices (Overview to Relationship Building)</li>
    <li>Restorative Practices (Program Development)</li>
    <li>Safe Schools Plan Consultation (NMPED)</li>
    <li>Situational Awareness</li>
  </ul>

  <h4 class="py-3">Human Resources/Civil Rights Courses</h4>
  <p>
    Julie Garcia, Regional Director -
    <a href="mailto:jgarcia@pomsassoc.com">jgarcia@pomsassoc.com</a>
  </p>
  <p>
    Tamie Pargas, Loss Prevention Specialist -
    <a href="mailto:tpargas@pomsassoc.com">tpargas@pomsassoc.com</a>
  </p>
  <ul>
    <li>ADA and The Rehabilitation Act</li>
    <li>Behavioral Management</li>
    <li>Bullying/Cyberbullying Prevention Policies</li>
    <li>Civil Rights - Title VII and Title IX</li>
    <li>Communication and Teamwork</li>
    <li>Compensation Review/Organizational Structure</li>
    <li>Cultural Sensitivity, Awareness, and Diversity</li>
    <li>Drug Free Workplace</li>
    <li>Employment Contracts</li>
    <li>Fair Labor Standards Act (FLSA)</li>
    <li>Family Educational Rights and Privacy Act (FERPA)</li>
    <li>Family Medical Leave Act (FMLA)</li>
    <li>General Safety - What Will You Do When You Retire?</li>
    <li>I-9 Completion</li>
    <li>Job Description Development</li>
    <li>Kitchen Civil Rights (USDA Annual Requirement)</li>
    <li>Neuro-Linguistics Programming</li>
    <li>New Legislation and National Trends</li>
    <li>Playground Supervision</li>
    <li>Predator Identification</li>
    <li>
      Professional Ethics and Boundaries - Sexual Predators in the
      Schools (SAMS Policies)
    </li>
    <li>
      School Personnel Hiring, Questions, References, Backgrounds and
      Staff Training (SAMS Policies)
    </li>
    <li>Sexual Harassment</li>
    <li>Title IX Compliance</li>
    <li>Workplace Violence</li>
  </ul>

  <h4 class="py-3">Ergonomics Courses</h4>
  <p>
    Karen Mestas-Harris, Senior Manager -
    <a href="mailto:kmestas@pomsassoc.com">kmestas@pomsassoc.com</a>
  </p>
  <p>
    Erin Brannan, Loss Prevention Specialist -
    <a href="mailto:ebrannan@pomsassoc.com">ebrannan@pomsassoc.com</a>
  </p>
  <ul>
    <li>Ergonomics for Custodial/Maintenance Staff</li>
    <li>Ergonomics for School Health Staff</li>
    <li>Ergonomics for Security Staff</li>
    <li>Ergonomics for Special Education Staff</li>
    <li>Ergonomics for Student Nutrition Staff</li>
    <li>Ergonomics for Transportation Staff</li>
    <li>Ergonomics in the Workplace</li>
    <li>Safe Lifting and Body Mechanics</li>
  </ul>
    `;
  }
}

customElements.define("in-person-trainings", InPersonTrainings);
