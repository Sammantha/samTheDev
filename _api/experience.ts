export const data = {
    jobs: [
        // Template:
        // {
        //     buttonLink: "https://",
        //     buttonText: "company.com",
        //     description1: `
        //          <p>
        //          </p>
        //          <p>Big Achievement #1 <small>(202X)</small></p>
        //          <ul>
        //              <li>Description</li>
        //              <li>
        //                  <strong>My contribution: </strong>My contribution here
        //              </li>
        //              <li>
        //                  <strong>Tech & Tools: </strong>AWS (Lambda, etc), NodeJS
        //              </li>
        //          </ul>
        //     `,
        //     image: "images/company_logo.png",
        //     imageAlt: "Company logo",
        //     title: "Company Name",
        //     subtitle: "",
        //     skills: [
        //         ["Skill", "Percentage of time spent on that skill at this position"],
        //         ["Skill 1", 60],
        //         ["Skill 2", 20],
        //         ["Skill 3", 20]
        //     ],
        //     pieColors: ["#0000", "#1111", "#101010"],
        //     years: "Y Years: Season 202X - Season 202X"
        // },
        {
            buttonLink: "https://paretohealth.com/",
            buttonText: "paretohealth.com",
            description1: `
                <p>
                    I am currently a Software Engineer with Pareto Health. I work remotely on a dev team of about 10 engineers.
                    Within my first 2 months here I earned my first AWS certification: Cloud Practitioner. 
                    Before my 1-year mark I was trusted with an EPIC for a feature the seniors didn't have the bandwidth to complete AND my own EPIC to work on tightening security in our cloud environment.
                </p>
                <p>
                    I'm a full-stack engineer, so my solutions can often include DB migration scripts, new API endpoints, new source PDFs stored in S3, new front-end pages, and new Lambdas.
                    To contribute to the team I create and update documentation, assist juniors with their tickets and blockers, and teach the product to new SDETs and product analysts.
                </p>

                <p>Self Funded <small>(2023)</small></p>
                <ul>
                    <li>I added parallel logic in our API for self-funded (as opposed to fully-funded) insurance clients, which have different inputs, outputs, and calculation logic.</li>
                    <li>
                        <strong>My contribution: </strong>The lead for this project started me off and then gave me the keys. 
                        I was in charge of interfacing with Product to clarify or adjust wants, updating the API and its tests with appropriate logic, 
                        adding conditional fields to the UI, and pushing changes to both our testing and production environments. 
                    </li>
                    <li>
                        <strong>Tech & Tools: </strong>AWS (Lambda, RDS), Typescript, GraphQL, MySQL, Angular, Ionic
                    </li>
                </ul>

                <p>Security/Infra Review <small>(2024)</small></p>
                <ul>
                    <li>Given our AWS Security Hub Findings, I was tasked with solving as many potential security improvements as I could as quickly as possible.</li>
                    <li>
                        <strong>My contribution: </strong>I authored a Lambda to consolidate the AWS Security Hub Findings into an Excel file with only the useful information.
                        Then I used this data to fill my EPIC with the most critical and most numerous reports. 
                        The meat of this project is to track down the offending code repo, resolve the problem in Infrastructure As Code, and deploy the Code Pipeline to all environments.
                        This project is still In-Progress. As of March 2024, I resolved 185+ Findings and learned much about the AWS SDK & CDK.
                    </li>
                    <li>
                        <strong>Tech & Tools: </strong>AWS (Lambda, S3, VPN, EC2, CloudFront), Typescript
                    </li>
                </ul>
            `,
            image: "images/paretohealth_logo.jpeg",
            imageAlt: "Pareto Health logo",
            title: "Pareto Health",
            subtitle: "Software Engineer",
            skills: [
                ["Skill", "Percentage of time spent on that skill at this position"],
                ["Infrastructure", 20],
                ["Back End", 35],
                ["Front End", 25],
                ["Documentation, Un-blocking, Team-work", 20]
            ],
            pieColors: ["#10ABBC", "#82D264", "#00ECCA", "#101F4F"],
            years: "Summer 2023 - Present"
        },
        {
            buttonLink: "https://www.circulohealth.com/#card-0",
            buttonText: "circulohealth.com",
            description1: `
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
            image: "images/circulo_logo.jpeg",
            imageAlt: "Circulo logo",
            title: "Circulo Health",
            subtitle: "Software Engineer II",
            skills: [
                ["Skill", "Percentage of time spent on that skill at this position"],
                ["Back End", 60],
                ["Front End", 20],
                ["Mentoring", 20]
            ],
            pieColors: ["#F37F65", "#5E649F", "#E2CEB5"],
            years: "2 Years: Summer 2021 - Summer 2023"
        },
        {
            buttonLink: "https://webbuy.com/",
            buttonText: "webbuy.com",
            description1: `
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
            examples: [
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
            description2: `
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
            image: "images/webbuy_logo.png",
            imageAlt: "WebBuy logo",
            title: "Webgrain & WebBuy",
            subtitle: "Web App Developer",
            skills: [
                ["Skill", "Percentage of time spent on that skill at this position"],
                ["Back End", 50],
                ["Front End", 50],
            ],
            pieColors: ["#EE5026", "#18636F"],
            years: "3 Years: Summer 2018 - Summer 2021"
        },
        {
            buttonLink: "http://playgvg.com/",
            buttonText: "playgvg.com",
            description1: `
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
            image: "images/gvg_logo.jpg",
            imageAlt: "grand vision gaming logo",
            title: "Grand Vision Gaming",
            subtitle: "Quality Assurance Lead",
            skills: [
                ["Skill", "Percentage of time spent on that skill at this position"],
                ["Manual Testing", 50],
                ["Documentation", 30],
                ["Coding Internal Tools", 20]
            ],
            pieColors: ["#B80308", "#E6A10A", "#000000"],
            years: "2 Years: Summer 2016 - Summer 2018"
        },
    ]
};
