import { faCircleInfo, faEnvelope, faPencil, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Contact = (theme) => {
    const image3 = `${theme.theme === "light" ? "/shape-top-grey-80.png" : "/shape-top-dark-grey-80.png"}`;
    return (
        <div>
            <section id="contact-info-section">
                <div className="top-grey">
                    <Image id="border3" src={image3} alt="Top Grey" width={1000} height={100} />
                </div>
                <div className="flex-container">
                    <div className="info-boxes">
                        <h3>For More Information:</h3>
                        <strong></strong>
                        <p>
                            <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
                        </p>
                        <strong></strong>
                        <p>
                            <strong>Email:</strong> info@ijawdancecontest.ng
                        </p>
                        <strong></strong>
                        <p>
                            <strong>Audition Location:</strong> Nitro Studio, Tamara Hall, Otiotio
                            Road, Yenagoa, Bayelsa State.
                        </p>
                    </div>
                    <div className="form-box">
                        <div className="form-row">
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser} className="fas fa-user" /> Name
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faEnvelope} className="fas fa-envelope" /> Email Address
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faPhoneVolume} className="fas fa-phone-volume" /> Phone
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faCircleInfo} className="fas fa-circle-info" /> Subject
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form-full">
                            <div className="form-group2">
                                <FontAwesomeIcon icon={faPencil} className="fas fa-pencil" /> How can we help you? Feel free to get
                                in touch!
                                <textarea rows={3} defaultValue={""} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <button className="contact-button">Get in Touch</button>
                </div>
            </section>

        </div>
    )
}

export default Contact