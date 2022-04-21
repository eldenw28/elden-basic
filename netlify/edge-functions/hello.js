// export default () => new Response("Hello Netlify!");

export default () => {
    console.log("Processing request for");
    new Response("Hello Netlify!");
}