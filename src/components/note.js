import { faDollarSign, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Note() {
    return (
        <div>
            <section id="important-info-section">
                <div className="info-container">
                    <div className="info-box">
                        <h3>Important things to note...</h3>
                    </div>
                    <div className="info-box">
                        <FontAwesomeIcon icon={faDollarSign} className="fa fa-dollar-sign" />
                        <h4>Pricing</h4>
                        <p>
                            Audition forms are available for ₦1,000 for single contestants, and
                            ₦1,500 for a group of five.
                        </p>
                    </div>
                    {/* Div 3: Prizes with cup icon */}
                    <div className="info-box">
                        <FontAwesomeIcon icon={faTrophy} className="fa fa-trophy" />
                        <h4>Prizes</h4>
                        <strong></strong>
                        <p>
                            <strong>1st Prize:</strong>₦2,000,000
                        </p>
                        <strong></strong>
                        <p>
                            <strong>2nd Prize:</strong>₦1,000,000
                        </p>
                        <strong></strong>
                        <p>
                            <strong>3rd Prize:</strong>₦500,000
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Note;