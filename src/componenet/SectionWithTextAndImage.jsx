
import "./SectionWithTextAndImage.css";

function SectionWithTextAndImage() {
  return (

    <section className="text-image-section">
      <div className="text-content">
        <h1>Hey !! Mario still here , But don't forget that </h1>
        <p>
          At focal X agency, we are working to build somthing different. Here
          you’ll have a group of creative people who specialize in: Branding,
          Digital Marketing, Web/App Development, Ui/Ux Content creation,
          Graphic design, Social media and More........ So you can take a tour
          in our website, OR just Press Start :
        </p>
      </div>
    <div className="ph1">
    <img src="./../public/images/game.png" alt=" Sorry,The photo wasn't uploaded" />
    </div>
    <div className="ph2">
    <img src="./../public/images/pressStart.svg" alt=" Sorry,The photo wasn't uploaded" />
   <div className="par5" >
   <h3>START</h3> 
   </div>
    </div>

    </section>

  );
}

export default SectionWithTextAndImage;
