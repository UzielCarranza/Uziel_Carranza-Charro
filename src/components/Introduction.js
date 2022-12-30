import "../styles/styles.css";
import profile_img from "../img/profile_img.png";

export const Introduction = () => {
    //TODO: Add link to get to know me directing to linkedin page
    return (
        <div className="wrapper-about_me responsive-column">
            <div className="wrapper-photo">
                <div className="wrapper-about_me-content  responsive-column">
                    <h3 className="white-wording">Hello I am </h3>
                    <h2 ><strong className="call-attention_word">Uziel Carranza Charro</strong></h2>
                </div>
                <img className="profile_photo" src={profile_img} alt="Uziel Carranza Charro"/>
            </div>

            <p className="white-wording">A <strong className="call-attention_word">Software Developer</strong> with a strong passion for
                building applications that will have a positive impact on the society. Get to<a rel="noreferrer" href="https://www.linkedin.com/in/uziel-carranza-charro/"
                                                               target="_blank"><strong className="call-attention_word">Know
                    me!</strong></a></p>
        </div>
    );
}