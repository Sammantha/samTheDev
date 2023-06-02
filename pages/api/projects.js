export default function handler(req, res) {
    res.status(200).json(
        {
            "projects": [
                {
                    "id": 1,
                    "buttonLink": "https://github.com/Sammantha/samTheDev",
                    "buttonText": "View the Repo!",
                    "description": `
                        <p>
                            A NextJS application to showcase my fullstack skills and learn NextJS. 
                            For now data lives in JS files and only half the pages work. 
                            In the future I hope to: 
                            <ul>
                                <li>store the page data in a Vercel DB</li>
                                <li>showcase a live working demo of all my projects</li>
                                <li>make sure my website is accessible to all abilities</li>
                                <li>give the option for users to browse in "green mode" which uses less resources</li>
                                <li>really get into styling and some animations</li>
                                <li>ensure my NextJS site is using static generation and dynamic fetching appropriately</li>
                            </ul>
                            I plan to work on this project about every-other-day for the next several weeks. 
                            Check back often!
                        </p>
                        <p>Tech Stack:</p>
                        <ul>
                            <li><strong>Back End: </strong>No DB yet, NextJS framework with JavaScript</li>
                            <li><strong>Front End: </strong>Next JS framework with JavaScript, React</li>
                            <li><strong>Cloud Services: </strong>Vercel</li>
                        </ul>
                        `,
                    "image": "/images/portfolio.png",
                    "imageAlt": "Screenshot of portfolio project",
                    "title": "Developer Portfolio",
                    "subtitle": "Spring 2023 - Currently In-Progress!",
                },
                {
                    "id": 2,
                    "buttonLink": "",
                    "buttonText": "Private Repo",
                    "description": `
                        <p>
                            A SaaS application built for a small local business to track their inventory between the warehouse and several of kiosks.
                            The kiosk workers take daily inventory and an Order is generated for them. 
                            The warehouse alters and approves the order, delivers the products, and then the kiosk recieves the order.
                            Inventory is then transferred by the API from the warehouse to the kiosks.
                            Packing slips and Invoices are generated as PDFs and can be printed and attached to orders.
                            This repo is private, but I do have a 
                            <a href="https://www.linkedin.com/posts/sam-vonbergen_react-app-29-april-2023-activity-7058173854573080576-7WA3?utm_source=share&utm_medium=member_desktop">Loom </a>
                            on my LinkedIn demoing it, and I'm always happy to do a live tour!
                        </p>
                        <p>Tech Stack:</p>
                        <ul>
                            <li><strong>Back End: </strong>MySQL DB, GraphQL layer, Node JS framework, Sequelize ORM</li>
                            <li><strong>Front End: </strong>React JS framework with JavaScript, Apollo Server</li>
                            <li><strong>Cloud Services: </strong>Digital Ocean Hosting using App Platform and Spaces</li>
                        </ul>
                        `,
                    "image": "/images/classynsassy.png",
                    "imageAlt": "Screenshot of inventory project",
                    "title": "Warehouse Inventory Tracking System",
                    "subtitle": "Summer 2021 - Present",
                },
            ]
        },
    );
}