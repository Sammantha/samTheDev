# Sam The Dev
My Software Developer portfolio website, showcasing my knowledge of popular techologies and frameworks. 
I delve into greater detail on positions I've held and projects I've made.
I also provide a few digital resources aimed at fellow developers.

## Project Running Info
To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


To ensure that the types are always up-to-date, make sure to run:
```bash
npm run cf-typegen
 ```
 after any changes to the wrangler.jsonc file.


## Project Deployment Info
Project is hosted on CloudFlare using Workers.

To deploy local code:

```bash
npm run deploy
```

Cloudflare will build and update with the latest.

Deploy using CLI, no pipeline from GitHub to CloudFlare Worers is set up.

## Local Development
CloudFlare: Local development is supported for Service bindings. For each Worker, open a new terminal and use wrangler dev in the relevant directory. When running wrangler dev, service bindings will show as connected/not connected depending on whether Wrangler can find a running wrangler dev session for that Worker.
