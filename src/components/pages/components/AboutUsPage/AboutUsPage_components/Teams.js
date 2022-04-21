import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import team_image1 from  '../AboutUsPage_images/teamImages/team_image-1.webp'
import team_image2 from  '../AboutUsPage_images/teamImages/team_image-2.webp'
import team_image3 from  '../AboutUsPage_images/teamImages/team_image-3.webp'
import team_image4 from  '../AboutUsPage_images/teamImages/team_image-4.webp'
import TeamsCards from './TeamsCards'
import './Teams.css'

function Teams () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section id="teams" class="teams" data-aos="zoom-in" data-duration="500">
        <div class="teams-inner text-white">
            <h3 class="section-title-white text-bold text-center text-medium" data-aos="fade-right">Our Team</h3>
            <p class="text-center" data-aos="fade-right">We are product managers, researchers, designers, engineers, <br />consultants, and much more</p>
            <div class="teams-cards-container d-flex default-padding-2">
                <TeamsCards image={team_image1} alt="Korede's Image" name="Korede Victor" othername="Adebayo" role="Co-Founder/CEO" />
                <TeamsCards image={team_image2} alt="Buluro's Image"  name="Buluro Tobi"  role="Co-Founder/COO" />
                <TeamsCards image={team_image3} alt="Kola's Image" name="Kola Shawana"  role="Technical Advisor/Director" />
                <TeamsCards image={team_image4} alt="Adedeji's Image" name="Adedeji Adeloye"  role="Head of Technology" />
                <TeamsCards image={team_image1} alt="Simisola's Image" name="Simisola Ajayi"  role="HR & Admin Executive" />
                <TeamsCards image={team_image2} alt="Jephtah's Image" name="Jephtah Paul Nmeri"  role="Product Designer" />
            </div>
        </div>
    </section> 
    )
}

export default Teams
