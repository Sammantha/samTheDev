export default function handler(req, res) {
    res.status(200).json(
        {
            "jobs": [
                {
                    "buttonText": "playgvg.com",
                    "description": `
                        At GVG I spent about half my time manually testing gambling machine software. 
                            This taught me how to come up with edge cases, how to ensure software adheres to state laws, and how to massage bugs out of user-facing software.
                            This experience gives me an excellent perspective for user stories while developing and makes me a strong supporter of TDD.
                        As a quality assurance specialist I created, updated, and kept documentation current regarding 
                            gaming machine payout percentages, maximum regular and bonus payout scenarios, and records of software submissions to the state and in production.
                        I had the occasional opportunity to design internal tools such as: 
                            a Python script to notify the QA team when the build was complete and 
                            a Bash script to securely clone the contents of a security dongle.
                        I was also Build Master, which included 
                            initiating the code build pipeline, 
                            smoke testing the software, and 
                            distributing the build to all members of the team.
                        My ultimate position at GVG was head of the Montana district. I was in charge of all software being developed, submitted, and distributed in Montana. 
                            GVG had thousands of copies of 2 software sets for 3 different "cabinets" (gambling machine hardware) in production. 
                            I handled all data & root cause analysis for all production client issues. I submitted software for review by the state when a new game was being released.
                        If you couldn't tell, I had passion for this position! Before my time at GVG I worked as a casino attendant for many years, and at GVG I loved getting to know the ins and outs of gaming machines, both hardware and software. 
                            When I became Montana QA lead, it was a rush owning an entire state's worth of products and delivering solutions to production bugs. 
                        I still play the new Montana games when they are released. Poker - Keno - Line Games are the order of the best payouts!
                        `,
                    "image": "/../public/images/gvg_logo.jpg",
                    "imageAlt": "grand vision gaming logo",
                    "title": "Grand Vision Gaming",
                    "subtitle": "Quality Assurance",
                    "skills": [
                        {
                            "title": "Manual Testing",
                            "value": 50
                        },
                        {
                            "title": "Documentation",
                            "value": 30
                        },
                        {
                            "title": "Coding Internal Tools",
                            "value": 20
                        }
                    ]
                },
            ]
        }
    );
}
