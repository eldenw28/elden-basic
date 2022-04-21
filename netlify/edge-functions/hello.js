// export default () => new Response("Hello Netlify!");

export default () => {
    log("Processing request for", req.url);
    new Response("Hello Netlify!");
}