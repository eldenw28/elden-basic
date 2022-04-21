// export default () => new Response("Hello Netlify!");

export default () => {
    log("Processing request for");
    new Response("Hello Netlify!");
}