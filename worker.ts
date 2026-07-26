export default {
    async fetch(request): Promise<Response> {
        async function MethodNotAllowed(request) {
            return new Response(`Method ${request.method} not allowed.`, {
                status: 405,
                headers: {
                    Allow: "GET",
                },
            });
        }
        // Only GET requests work with this proxy.
        if (request.method !== "GET") return MethodNotAllowed(request);
        const url = new URL(request.url);
        if (!url.pathname.toLowerCase().startsWith("/vpm-repos")) return new Response("Not Found", {
            status: 404
        });

        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler;