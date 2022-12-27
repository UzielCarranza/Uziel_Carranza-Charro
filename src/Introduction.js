import "./styles.css";

export const Introduction = () => {
    //TODO: Add link to get to know me directing to linkedin page
    return (
        <div className="wrapper-about_me">
            <h1>Hello there I am <strong className="call-attention_word">Uziel Carranza Charro</strong></h1>
            <p>A <strong className="call-attention_word">Software Developer</strong> with a strong passion for
                building responsive web applications get to <a href="https://www.linkedin.com/in/uziel-carranza-charro/"
                                                               target="_blank"><strong className="call-attention_word">Know
                    me!</strong></a></p>
        </div>
    );
}