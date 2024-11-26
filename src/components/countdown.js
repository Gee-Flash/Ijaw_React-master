import Image from "next/image";

const Countdown = (theme) => {
    const image2 = `${theme.theme === "light" ? "/shape-bottom-white-80.png" : "/shape-bottom-black-80.png"}`;
    // Set the date for the audition countdown (replace with your event date)
    const auditionDate = new Date("2024-11-30T00:00:00").getTime();

// Update the countdown every 1 second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = auditionDate - now;

 // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Display the result
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

// If the countdown is over, display "Event Started!"
        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = 0;
            document.getElementById("hours").innerHTML = 0;
            document.getElementById("minutes").innerHTML = 0;
            document.getElementById("seconds").innerHTML = 0;
            document.querySelector("#countdown-section h2").innerHTML = "Audition Started!";
        }
    }, 1000);

    return (
        <div>
            <section id="countdown-section">
                <h2>Countdown to Audition</h2>
                <div className="countdown">
                    <div className="time-box">
                        <span id="days">11</span>
                        <div className="dash">-</div>
                        <p>Days</p>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-box">
                        <span id="hours">14</span>
                        <div className="dash">-</div>
                        <p>Hours</p>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-box">
                        <span id="minutes">18</span>
                        <div className="dash">-</div>
                        <p>Minutes</p>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-box">
                        <span id="seconds">25</span>
                        <div className="dash">-</div>
                        <p>Seconds</p>
                    </div>
                </div>
                <div className="bottom-white">
                    <Image
                        id="border2"
                        src={image2}
                        alt="Bottom White"
                        width={1000}
                        height={100}
                    />
                </div>
            </section>

        </div>
    )
}

export default Countdown;