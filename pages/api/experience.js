export default function handler(req, res) {
    res.status(200).json(
        {
            "jobs": [
                {
                    "buttonLink": "http://playgvg.com/",
                    "buttonText": "playgvg.com",
                    "description": `
                        <p>At GVG I spent about half my time manually testing gambling machine software. 
                            This taught me how to come up with edge cases, how to ensure software adheres to state laws, and how to massage bugs out of user-facing software.
                            This experience gives me an excellent perspective for user stories while developing and makes me a strong supporter of TDD.</p>
                        <p>As a quality assurance specialist I created, updated, and kept documentation current regarding 
                            gaming machine payout percentages, maximum regular and bonus payout scenarios, and records of software submissions to the state and in production.</p>
                        <p>I had the occasional opportunity to design internal tools such as:</p>
                            <ul>
                                <li>python script to notify the QA team when the build was complete</li>
                                <li>bash script to securely clone the contents of a security dongle</li>
                            </ul>
                        <p>I was also Build Master, which included:</p>
                            <ul>
                                <li>initiating the code build pipeline</li>
                                <li>smoke testing the software</li>
                                <li>distributing the build to all members of the team</li>
                            </ul>
                        <p>My highest position at GVG was head of the Montana district. Montana had thousands of copies of multiple software sets for multiple different hardware sets in production. I was in charge of all of them.</p>
                        <p>My resonsibilities were:</p>
                        <ul>
                            <li>owning all software being developed, submitted, and distributed in Montana</li>
                            <li>resolving all production software issues through root cause analysis</li>
                            <li>submitting software for review by the State when a new game, game set, or cabinet was being released</li>
                        </ul>
                        <p>If you couldn't tell, I had passion for this position! 
                            I loved getting to know the ins and outs of gaming machines, both hardware and software, and witnessed the whole process from conception of a cabinet and game to release.</p>
                            On their website below you'll see games like Buffalo Keno, Longhorn Reels, Enchanted Keno, Sparkling Royale, Wild Lepre'Coins, etc. 
                            I helped perfect all the above games and some of their adaptations to other types (poker, keno, reel) and other states (Nevada, Lousiana, West Virginia).
                        `,
                    "image": "/images/gvg_logo.jpg",
                    "imageAlt": "grand vision gaming logo",
                    "title": "Grand Vision Gaming",
                    "subtitle": "Quality Assurance Lead",
                    "skills": [
                        ["Skill", "Percentage of time spent on that skill at this position"],
                        ["Manual Testing", 50],
                        ["Documentation", 30],
                        ["Coding Internal Tools", 20]
                    ],
                    "pieColors": ["#B80308", "#E6A10A", "#000000"]
                },
            ]
        }
    );
}
