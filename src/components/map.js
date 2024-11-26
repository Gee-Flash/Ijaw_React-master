export default function Map() {
    return (
        <>
            <section id="map-section">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5863765075383!2d-122.41941528486172!3d37.774929179759184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d8f92f47%3A0x5f1f49c22c33170!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1606920543645!5m2!1sen!2sus"
                        width={1000} height={450} style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </section>
        </>
    )
}