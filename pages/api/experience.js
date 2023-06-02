export default function handler(req, res) {
    res.status(200).json(
        {
            "jobs": [
                {
                    "buttonLink": "https://www.circulohealth.com/#card-0",
                    "buttonText": "circulohealth.com",
                    "description1": `
                        <p>
                            I joined Circulo 4 months after the company's official inception and stayed with them till their very last day as a tech company 2 years later. 
                            I joined them as employee #41 when they were still a small startup, collaborated with other teams and departments when they reached their peak of 300, and helped close down products and projects as each one was exited.
                            I was selected to stay through 3 layoffs/reorganizations and each time I recieved feedback that I had grown so much and showed excellent potential. 
                        </p>
                        <p>Here are 3 major projects I worked on throughout my time at Circulo:</p>

                        <p>Insurance Claim State Machine <small>(2021)</small></p> 
                        <ul>
                        <li>A completely automated system hosted in AWS designed to intake a medical insurance claim from our clearinghouse, process it, and udpate the clearinghouse on the claim's status every step of the way.</li>
                        <li>
                            <strong>My contribution: </strong>I owned the notification system from end-to-end, partnering with our sister company to collaborate on the endpoints and messages. I also helped design the processing system, authored some of the processing Lambdas, and maintained others when the team underwent changes.
                        </li>
                        <li>
                            <strong>Tech & Tools: </strong>AWS (Lambda, SQS/SNS, DynamoDB, Step Functions), Golang, NodeJS
                        </li>
                        </ul>

                        <p>Payroll Anomaly Detection <small>(2022)</small></p> 
                        <ul>
                        <li>
                            I designed this 
                            <a target='_blank' href='https://en.wikipedia.org/wiki/Business_rules_engine'>Business Rules Engine</a>
                            to detect errors within 3rd-party (Connect-A-Voice) generated payroll files and save the company hundreds of thousands of dollars in missed revenue at scale.
                        </li>
                        <li>
                            What did this look like in production? The payroll client would upload the source .csv file to a specific website, 
                            the file would be processed through a Lambda that compared time clock entries against rules in a database, 
                            and the front-end would recieve the data back to display along with detected errors. 
                            The payroll client would then go back to the source 3rd party software, correct the time clock issues, and validate again.
                        </li>
                        <li>
                            What sort of rules did we validate our data against? Employees cannot work more than 16 hours in one calendar day, employees cannot be clocked in at two different locations at the same time, an individual being served cannot go over their maximum alloted units of care allowed by the state, employees who have completed longevity training clock in under different codes and get paid an extra $1/hour.
                        </li>
                        <li>
                            <strong>My contribution: </strong>I was the lead engineer on this project. I designed the solution, built it with the help of 2 more junior developers under my mentorship, and supported it in production as a sole maintainer.
                        </li>
                        <li>
                            <strong>Tech & Tools: </strong>AWS (Amplify, S3, DynamoDB, Cloudwatch, API Gateway, Lambda, Cognito), Terraform, Golang, React, Typescript, PostgreSQL, Slack
                        </li>
                        </ul>

                        <p>Circulo HOMES <small>(2023)</small></p> 
                            <ul>
                                <li>
                                    A SaaS platform that boasted both a mobile app for users and a web dashboard for admins with a centralized API and database.
                                    It served mostly as a payroll/timekeeping system where employees (nurses) would clock into shifts scheduled with clients (individuals with intellectual and developmental disabilities) and record their hours.
                                    The API would then calculate & validate payroll for the employees and generate state-specific files for the submission of reimbursement for hours. 
                                </li>
                                <li>
                                    <strong>My contribution: </strong>I worked mostly on the API written in Golang, owned the back-up dial-in system hosted on Twilio with logic in AWS Lambdas, added features and fixed bugs in the React/Typescript frontend, and designed the Payroll Anomaly Detection v2 product
                                </li>
                                <li>
                                    <strong>Tech & Tools: </strong>AWS (Lambda, Cloudwatch, S3, Cognito), GoLang, NodeJS, React, Typescript, Datadog, PostgreSQL, Okta, Twilio, Terraform, NodeJS
                                </li>
                            </ul>
                        `,
                    "image": "/images/circulo_logo.jpeg",
                    "imageAlt": "Circulo logo",
                    "title": "Circulo Health",
                    "subtitle": "Software Engineer II",
                    "skills": [
                        ["Skill", "Percentage of time spent on that skill at this position"],
                        ["Back End", 60],
                        ["Front End", 20],
                        ["Mentoring", 20]
                    ],
                    "pieColors": ["#F37F65", "#5E649F", "#E2CEB5"],
                    "years": "2 Years: Summer 2021 - Summer 2023"
                },
                {
                    "buttonLink": "https://webbuy.com/",
                    "buttonText": "webbuy.com",
                    "description1": `
                        <p>
                            I held 2 positions at this company - Junior Website Developer and Web App Developer. 
                            I was a website developer with WebGrain until 2020 when Webgrain's largest client purchased them and we became WebBuy.
                            At that point my work shifted away from WordPress and over to SPAs and APIs.
                        </p>
                        <p>Junior Website Developer <small>(2019)</small></p> 
                        <ul>
                            <li>I created static and dynamic websites with WordPress and PHP, maintained hundreds of client sites with upgrades & bug fixes, and dabbled in more complex projects to help out the team.</li>
                            <li>Tech and tools I used to build websites included: WordPress, HTML, CSS, Sass, jQuery, and PHP</li>
                            <li>Particiapted in hack-a-thons where we practiced new frameworks like Laravel, Lumen, and Angular</li>
                            <li>Teamed up with 2 other developers to build a web application for automating courtroom paperwork for divorces. 
                            The lawyers would direct their clients to the site, the clients would fill out a simple questionairre, and the divorce paperwork would be automatically generated and filled out, ready to print and sign.</li>
                            <li>The following are 5 examples of websites I built myself:</li>
                        </ul>
                    `,
                    "examples": [
                        {
                            "src": "/images/weave.png",
                            "alt": "Weave Transportation's Homepage",
                            "link": "https://weaveind.com/",
                            "caption": "Weave Transportation: A local trucking company's informational website"
                        },
                        {
                            "src": "/images/ostlunds.png",
                            "alt": "Ostlund's Fire Protection Homepage",
                            "link": "https://ofp.cc/",
                            "caption": "Ostlund's Fire Protection: A local fire safety device installation company's informational website"
                        },
                        {
                            "src": "/images/highTech.png",
                            "alt": "High Tech Solutions Group's Featured Projects Page",
                            "link": "https://hts-sg.com/",
                            "caption": "High Tech Solutions: A local safety & security company's informational website"
                        },
                        {
                            "src": "/images/susanBryan.png",
                            "alt": "Susan Bryan Studios Gallery Page",
                            "link": "https://susanbryanstudios.com/",
                            "caption": "Susan Bryan Studios: a local oil artist's ecommerce and portfolio site"
                        },
                        {
                            "src": "/images/ontherox.png",
                            "alt": "On The Rox Homepage",
                            "link": "https://ontheroxfab.com/",
                            "caption": "On the Rox Fabrication: a Roxor special interest group's ecommerce and guide site"
                        }
                    ],
                    "description2": `
                        <p>Web App Devloper <small>(2020 - 2021)</small></p> 
                            <ul>
                                <li>Contributed to the design of a new, revamped, serverless WebBuy application in newer technologies</li>
                                <li>Built out new features of the new application on the front-end and in the API</li>
                                <li>Assisted the Help Desk with triage, debugging, and resolving of client issues.</li>
                                <li>Technology and tools I used for the new application included: Angular, GraphQL, AWS Lambda, MySQL, NodeJS, and Sass</li>
                                <br>
                                <li>Maintained and debugged the legacy WebBuy application while the new application was being built up</li>
                                <li>Technology and tools I used for the legacy application included: CodeIgniter, PHP, HTML, CSS, and jQuery</li>
                            </ul>
                        `,
                    "image": "/images/webbuy_logo.png",
                    "imageAlt": "WebBuy logo",
                    "title": "Webgrain & WebBuy",
                    "subtitle": "Web App Developer",
                    "skills": [
                        ["Skill", "Percentage of time spent on that skill at this position"],
                        ["Back End", 50],
                        ["Front End", 50],
                    ],
                    "pieColors": ["#EE5026", "#18636F"],
                    "years": "3 Years: Summer 2018 - Summer 2021"
                },
                {
                    "buttonLink": "http://playgvg.com/",
                    "buttonText": "playgvg.com",
                    "description1": `
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
                            I helped perfect all the above games and some of their adaptations to other types (poker, keno, reel) and other states (Nevada, Lousiana, West Virginia).</p>
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
                    "pieColors": ["#B80308", "#E6A10A", "#000000"],
                    "years": "2 Years: Summer 2016 - Summer 2018"
                },
            ]
        }
    );
}
