import React, { Component } from "react";
import "./about.css";
import $ from "jquery";
import { FaCaretUp } from "react-icons/fa";
export default class About extends Component {


  componentDidMount() {

    // Runs when info card clickded -> scroll to that div
    $(".info-card").on("click", function () {
      let type = $(this).data("type");

      goToByScroll(type);
    });

    // If scroll div clicked scroll to top of the page
    $(".scroll-div").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // Scroll function
    function goToByScroll(type) {
      
      let container = type + "-container";
      // Scroll
      $("html,body").animate(
        {
          scrollTop: $("." + container).offset().top,
        },
        "slow"
      );
    }
    
    // Runs when page scroll down and scroll-div appears
    window.addEventListener("scroll",function(){
      if(document.documentElement.scrollTop == 0){
        $(".scroll-div").fadeOut()
      }else{
          $(".scroll-div").fadeIn()
      }
    })
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h3 className="about-head"> Coronavirus </h3>
        </div>
        <div className="about-brief">
          <strong>Coronaviruses</strong> are a group of related RNA viruses that
          cause diseases in mammals and birds. In humans, these viruses cause
          respiratory tract infections that can range from mild to lethal. Mild
          illnesses include some cases of the common cold (which is caused also
          by certain other viruses, predominantly rhinoviruses), while more
          lethal varieties can cause SARS, MERS, and COVID-19. Symptoms in other
          species vary: in chickens, they cause an upper respiratory tract
          disease, while in cows and pigs they cause diarrhea. There are as yet
          no vaccines or antiviral drugs to prevent or treat human coronavirus
          infections. Coronaviruses constitute the subfamily{" "}
          <strong>Orthocoronavirinae</strong>, in the family Coronaviridae,
          order Nidovirales, and realm Riboviria. They are enveloped viruses
          with a positive-sense single-stranded RNA genome and a nucleocapsid of
          helical symmetry. This is wrapped in a icosahedral protein shell. The
          genome size of coronaviruses ranges from approximately 26 to 32
          kilobases, one of the largest among RNA viruses. They have
          characteristic club-shaped spikes that project from their surface,
          which in electron micrographs create an image reminiscent of the solar
          corona, from which their name derives.
        </div>

        <div className="about-body">
          <div className="row">
            <div className="col-lg-3">
              <div className="info-card" data-type="symptoms">
                Symptoms
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-card" data-type="testing">
                Testing
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-card" data-type="sick">
                If you are sick
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-card" data-type="protect">
                How to Protect Yourself
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-div">
            {" "}
            <FaCaretUp size={40} color="white"></FaCaretUp>{" "}
        </div>

        <div className="symptoms-container mt-5r">
          <div className="symptoms-header">Symptoms of Coronavirus</div>
          <div className="symptoms-mini-header">What you need to know</div>
          <div className="symptoms-body">
            <ul>
              <li>Anyone can have mild to severe symptoms.</li>
              <li>
                Older adults and people who have severe underlying medical
                conditions like heart or lung disease or diabetes seem to be at
                higher risk for developing more serious complications from
                COVID-19 illness
              </li>
            </ul>
            <div className="symptoms-mini-header">Watch for symptoms</div>
            People with COVID-19 have had a wide range of symptoms reported –
            ranging from mild symptoms to severe illness. Symptoms may appear
            2-14 days after exposure to the virus. People with these symptoms
            may have COVID-19:
            <ul>
              <li>Cough</li>
              <li>Shortness of breath or difficulty breathing</li>
              <li>Fever</li>
              <li>Chills</li>
              <li>Muscle pain</li>
              <li>Sore throat</li>
              <li>New loss of taste or smell</li>
            </ul>
            This list is not all possible symptoms. Other less common symptoms
            have been reported, including gastrointestinal symptoms like nausea,
            vomiting, or diarrhea.
            <div className="symptoms-mini-header">
              When to Seek Emergency Medical Attention
            </div>
            Look for <strong>emergency warning signs*</strong> for COVID-19. If
            someone is showing any of these signs,{" "}
            <strong>seek emergency medical care immediately</strong>
            <ul>
              <li>Trouble breathing</li>
              <li>Persistent pain or pressure in the chest</li>
              <li>New confusion</li>
              <li>Inability to wake or stay awake</li>
              <li>Bluish lips or face</li>
            </ul>
            *This list is not all possible symptoms. Please call your medical
            provider for any other symptoms that are severe or concerning to
            you.{" "}
            <strong>
              Call 911 or call ahead to your local emergency facility:
            </strong>{" "}
            Notify the operator that you are seeking care for someone who has or
            may have COVID-19.
          </div>
        </div>

        <div className="testing-container">
          <div className="testing-header">Testing for COVID-19</div>
          <div className="testing-body mt-5r">
            Two kinds of tests are available for COVID-19:{" "}
            <strong>viral tests</strong> and <strong>antibody tests</strong>.
            <ul>
              <li>A viral test tells you if you have a current infection.</li>
              <li>
                An antibody test tells you if you had a previous infection.
              </li>
            </ul>
            An antibody test may not be able to show if you have a current
            infection, because it can take 1-3 weeks after infection to make
            antibodies. We do not know yet if having antibodies to the virus can
            protect someone from getting infected with the virus again, or how
            long that protection might last.
            <div className="testing-mini-header">Who should be tested</div>
            To learn if you have a current infection, viral tests are used. But
            not everyone needs this test.
            <ul>
              <li>
                Most people will have mild illness and can recover at home
                without medical care and may not need to be tested.
              </li>
              <li>
                CDC has guidance for who should be tested, but decisions about
                testing are made by state and localexternal icon health
                departments or healthcare providers.
              </li>
              <li>
                If you have symptoms of COVID-19 and want to get tested, call
                your healthcare provider first.
              </li>
              <li>
                You can also visit your state or local health department’s
                website to look for the latest local information on testing.
              </li>
              <li>
                Although{" "}
                <strong>
                  supplies of tests are increasing, it may still be difficult to
                  find a place to get tested.
                </strong>
              </li>
            </ul>
            <div className="testing-mini-header">Results</div>
            <ul>
              <li>
                <strong>
                  If you test positive for COVID-19 by a viral test
                </strong>
                , know what protective steps to take if you are sick or caring
                for someone.
              </li>
              <li>
                <strong>
                  If you test negative for COVID-19 by a viral test
                </strong>
                , you probably were not infected at the time your sample was
                collected. However, that does not mean you will not get sick.
                The test result only means that you did not have COVID-19 at the
                time of testing.
              </li>
            </ul>
          </div>
        </div>

        <div className="sick-container mt-2r">
          <div className="sick-header mt-2r">
            Steps to help prevent the spread of COVID-19 if you are sick
          </div>

          <div className="sick-body mt-3r">
            Follow the steps below: If you are sick with COVID-19 or think you
            might have COVID-19, follow the steps below to care for yourself and
            to help protect other people in your home and community.
            <div className="sick-mini-header">
              Stay home except to get medical care
            </div>
            <ul>
              <li>
                <strong> Stay home.</strong> Most people with COVID-19 have mild
                illness and can recover at home without medical care. Do not
                leave your home, except to get medical care. Do not visit public
                areas.
              </li>
              <li>
                <strong>Take care of yourself</strong>. Get rest and stay
                hydrated. Take over-the-counter medicines, such as
                acetaminophen, to help you feel better.
              </li>
              <li>
                <strong>Stay in touch with your doctor.</strong> Call before you
                get medical care. Be sure to get care if you have trouble
                breathing, or have any other emergency warning signs, or if you
                think it is an emergency.
              </li>
              <li>
                <strong>Avoid public transportation,</strong> ride-sharing, or
                taxis.
              </li>
            </ul>
            <div className="sick-mini-header">
              Separate yourself from other people
            </div>
            <strong>As much as possible, stay in a specific room</strong> and
            away from other people and pets in your home. If possible, you
            should use a separate bathroom. If you need to be around other
            people or animals in or outside of the home, wear a cloth face
            covering.
            <ul>
              <li>
                Additional guidance is available for those living in close
                quarters and shared housing.
              </li>
              <li>
                See COVID-19 and Animals if you have questions about pets.
              </li>
            </ul>
            <div className="sick-mini-header">Monitor your symptoms</div>
            <ul>
              <li>
                <strong>
                  Symptoms of COVID-19 include fever, cough, and shortness of
                  breath but other symptoms may be present as well.
                </strong>{" "}
                Trouble breathing is a more serious symptom that means you
                should get medical attention.
              </li>
              <li>
                <strong>
                  {" "}
                  Follow care instructions from your healthcare provider and
                  local health department.
                </strong>{" "}
                Your local health authorities may give instructions on checking
                your symptoms and reporting information.
              </li>
            </ul>
            <div className="sick-mini-header">
              When to Seek Emergency Medical Attention
            </div>
            Look for <strong>emergency warning signs*</strong> for COVID-19. If
            someone is showing any of these signs,{" "}
            <strong>seek emergency medical care immediately</strong>
            <ul>
              <li>Trouble breathing</li>
              <li>Persistent pain or pressure in the chest</li>
              <li>New confusion</li>
              <li>Inability to wake or stay awake</li>
              <li>Bluish lips or face</li>
            </ul>
            This list is not all possible symptoms. Please call your medical
            provider for any other symptoms that are severe or concerning to
            you.
            <strong>
              Call 911 or call ahead to your local emergency facility:
            </strong>{" "}
            Notify the operator that you are seeking care for someone who has or
            may have COVID-19.
            <div className="sick-mini-header">
              Call ahead before visiting your doctor
            </div>
            <ul>
              <li>
                <strong>Call ahead.</strong> Many medical visits for routine
                care are being postponed or done by phone or telemedicine.
              </li>
              <li>
                <strong>
                  If you have a medical appointment that cannot be postponed,
                  call your doctor’s office,
                </strong>{" "}
                and tell them you have or may have COVID-19. This will help the
                office protect themselves and other patients.
              </li>
            </ul>
            <div className="sick-mini-header">
              If you are sick wear a cloth covering over your nose and mouth
            </div>
            <ul>
              <li>
                <strong>
                  You should wear a cloth face covering, over your nose and
                  mouth
                </strong>
                if you must be around other people or animals, including pets
                (even at home)
              </li>
              <li>
                You don’t need to wear the cloth face covering if you are alone.
                If you can’t put on a cloth face covering (because of trouble
                breathing, for example), cover your coughs and sneezes in some
                other way. Try to stay at least 6 feet away from other people.
                This will help protect the people around you.
              </li>
              <li>
                Cloth face coverings should not be placed on young children
                under age 2 years, anyone who has trouble breathing, or anyone
                who is not able to remove the covering without help.
              </li>
            </ul>
            <div className="sick-mini-header">
              Cover your coughs and sneezes
            </div>
            <ul>
              <li>
                <strong>Cover your mouth and nose</strong> with a tissue when
                you cough or sneeze.
              </li>
              <li>
                <strong>Throw away used tissues</strong> in a lined trash can.
              </li>
              <li>
                <strong>Immediately wash your hands</strong> with soap and water
                for at least 20 seconds. If soap and water are not available,
                clean your hands with an alcohol-based hand sanitizer that
                contains at least 60% alcohol.
              </li>
            </ul>
            <div className="sick-mini-header">Clean your hands often</div>
            <ul>
              <li>
                <strong>Wash your hands</strong> often with soap and water for
                at least 20 seconds. This is especially important after blowing
                your nose, coughing, or sneezing; going to the bathroom; and
                before eating or preparing food.
              </li>
              <li>
                <strong>Use hand sanitizer</strong> if soap and water are not
                available. Use an alcohol-based hand sanitizer with at least 60%
                alcohol, covering all surfaces of your hands and rubbing them
                together until they feel dry.
              </li>
              <li>
                <strong>Soap and water</strong> are the best option, especially
                if hands are visibly dirty.
              </li>
              <li>
                <strong>Avoid touching</strong> your eyes, nose, and mouth with
                unwashed hands.
              </li>
            </ul>
          </div>
        </div>

        <div className="protect-container">
          <div className="protect-header">How to Protect Yourself & Others</div>

          <div className="protect-mini-header">Know how it spreads</div>

          <ul>
            <li>
              There is currently no vaccine to prevent coronavirus disease 2019
              (COVID-19).
            </li>
            <li>
              The best way to prevent illness is to avoid being exposed to this
              virus.
            </li>
            <li>
              {" "}
              The virus is thought to spread mainly from person-to-person
              <ul>
                <li>
                  Between people who are in close contact with one another
                  (within about 6 feet).
                </li>
                <li>
                  Through respiratory droplets produced when an infected person
                  coughs, sneezes or talks.
                </li>
                <li>
                  These droplets can land in the mouths or noses of people who
                  are nearby or possibly be inhaled into the lungs.
                </li>
                <li>
                  Some recent studies have suggested that COVID-19 may be spread
                  by people who are not showing symptoms.
                </li>
              </ul>
            </li>
          </ul>

          <div className="protect-mini-header">
            <strong>Everyone Should</strong>
          </div>

          <div className="protect-mini-header">Wash your hands often</div>

          <ul>
            <li>
              Wash your hands often with soap and water for at least 20 seconds
              especially after you have been in a public place, or after blowing
              your nose, coughing, or sneezing.
            </li>
            <li>
              If soap and water are not readily available,{" "}
              <strong>
                use a hand sanitizer that contains at least 60% alcohol.
              </strong>{" "}
              Cover all surfaces of your hands and rub them together until they
              feel dry.
            </li>
            <li>
              <strong>Avoid touching your eyes, nose, and mouth</strong> with
              unwashed hands.
            </li>
          </ul>

          <div className="protect-mini-header">Avoid close contact</div>

          <ul>
            <li>
              <strong>
                Avoid close contact with people who are sick, even inside your
                home.
              </strong>{" "}
              If possible, maintain 6 feet between the person who is sick and
              other household members.
            </li>
            <li>
              <strong>
                Put distance between yourself and other people outside of your
                home.
              </strong>
              <ul>
                <li>
                  Remember that some people without symptoms may be able to
                  spread virus.
                </li>
                <li>
                  Stay at least 6 feet (about 2 arms’ length) from other people.
                </li>
                <li>Do not gather in groups.</li>
                <li>Stay out of crowded places and avoid mass gatherings.</li>
                <li>
                  Keeping distance from others is especially important for
                  people who are at higher risk of getting very sick.
                </li>
              </ul>
            </li>
          </ul>

          <div className="protect-mini-header">
            Cover your mouth and nose with a cloth face cover when around others
          </div>

          <ul>
            <li>
              You could spread COVID-19 to others even if you do not feel sick.
            </li>
            <li>
              Everyone should wear a cloth face cover when they have to go out
              in public, for example to the grocery store or to pick up other
              necessities.
              <ul>
                <li>
                  Cloth face coverings should not be placed on young children
                  under age 2, anyone who has trouble breathing, or is
                  unconscious, incapacitated or otherwise unable to remove the
                  mask without assistance.
                </li>
              </ul>
            </li>
            <li>
              The cloth face cover is meant to protect other people in case you
              are infected.
            </li>
            <li>Do NOT use a facemask meant for a healthcare worker.</li>
            <li>
              Continue to keep about 6 feet between yourself and others. The
              cloth face cover is not a substitute for social distancing.
            </li>
          </ul>

          <div className="protect-mini-header">Cover coughs and sneezes</div>

          <ul>
            <li>
              <strong>
                If you are in a private setting and do not have on your cloth
                face covering, remember to always cover your mouth and nose
              </strong>{" "}
              with a tissue when you cough or sneeze or use the inside of your
              elbow.
            </li>
            <li>
              <strong>Throw used tissues</strong> in the trash.
            </li>
            <li>
              Immediately <strong>wash your hands</strong> with soap and water
              for at least 20 seconds. If soap and water are not readily
              available, clean your hands with a hand sanitizer that contains at
              least 60% alcohol.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
