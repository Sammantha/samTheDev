export const data = {
    projects: [
        {
            id: 3,
            buttonLink: "https://github.com/Sammantha/vonbergen-position-search-automation",
            buttonText: "View the Repo!",
            description: `
                    <p>
                        A web application to deliver scraped, filtered, and organized job listings to 2 users: my partner and I.
                        My partner developed the web scraper in Python & Selenium to scan for open positions and filter by custom criteria.
                        I set up the database and developed the full-stack applicaion to act as an API & a simple front-end.
                        The front-end is simple: you can select a User, change their keyword exclusion strings, and delete each of their scraped listings.
                        The API accepts a payload from the Python logic and decides which listings need to be inserted. 
                        It allows the front-end to get and soft-delete listings. Soft-deletion allows us to avoid duplicate data.
                    </p>
                    <p>Tech Stack:</p>
                    <ul>
                        <li><strong>Front End: </strong>NextJS framework with React & Typescript</li>
                        <li><strong>Back End: </strong>CloudFlare's D1 SQLite relational database, REST API within the NextJS app</li>
                        <li><strong>Cloud Services: </strong>CloudFlare for hosting</li>
                    </ul>
                    `,
            image: "images/vbPositionScraper.png",
            imageAlt: "Screenshot of open position scraper project",
            title: "FullStack Open Position Scraper & Aggregator",
            subtitle: "Summer 2025 - Present",
        },
        {
            id: 1,
            buttonLink: "https://github.com/Sammantha/samTheDev",
            buttonText: "View the Repo!",
            description: `
                    <p>
                        A web developer portfolio to showcase my fullstack skills, learn NextJS, and practice React.
                        In the future I hope to: 
                        <ul>
                            <li>provide light/dark mode styling options</li>
                            <li>make my website accessible to all abilities</li>
                            <li>showcase a video or live demo of all my projects</li>
                            <li>learn UI Design and redesign my work experience and project pages</li>
                        </ul>
                    </p>
                    <p>Tech Stack:</p>
                    <ul>
                        <li><strong>Front End: </strong>NextJS framework with React & Typescript</li>
                        <li><strong>Back End: </strong>No DB, data is stored as html in JS files</li>
                        <li><strong>Cloud Services: </strong>CloudFlare</li>
                    </ul>
                    `,
            image: "images/portfolio.png",
            imageAlt: "Screenshot of developer portfolio project",
            title: "Developer Portfolio",
            subtitle: "Spring 2023 - Present",
        },
        {
            id: 2,
            buttonLink: "",
            buttonText: "Private Repo",
            description: `
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
                        <li><strong>Front End: </strong>React framework with JavaScript & Apollo Server</li>
                        <li><strong>Back End: </strong>MySQL DB, GraphQL layer, Node JS framework, Sequelize ORM</li>
                        <li><strong>Cloud Services: </strong>Digital Ocean Hosting using App Platform and Spaces</li>
                    </ul>
                    `,
            image: "images/classynsassy.png",
            imageAlt: "Screenshot of inventory project",
            title: "Warehouse Inventory Tracking System",
            subtitle: "Summer 2021 - Present",
        },
    ]
}
