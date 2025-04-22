document.addEventListener('DOMContentLoaded', () => {
    //#########################

        //Google Scholar Citations

        //#########################
        // SerpAPI endpoint (no CORS)
        const API_KEY   = "3900f54f31f2a51e27c2e1c879256310791bd0f35e83c6d2edaaaa790b97522b";
        const AUTHOR_ID = "pUSXwTMAAAAJ";
        const baseUrl   = "https://serpapi.com/search.json?"
        + new URLSearchParams({
            engine:    "google_scholar_author",
            api_key:   API_KEY,
            author_id: AUTHOR_ID,
            hl:        "en"
            }).toString();

        // Use All Origins proxy to bypass CORS
        const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(baseUrl);

        fetch(proxyUrl)
        .then(r => {
            if (!r.ok) throw new Error("Network response was not ok");
            return r.json();
        })
        .then(data => {
            const cit = data.cited_by.table[0].citations.all ?? "N/A";
            const h   = data.cited_by.table[1].h_index.all ?? "N/A";
            document.getElementById("gs-citations").textContent = cit;
            document.getElementById("gs-hindex").textContent    = h;
            document.getElementById("gs-status").textContent    = "Loaded ✔️";
        })
        .catch(err => {
            console.error("Fetch error:", err);
            document.getElementById("gs-status").textContent = "Error loading";
        });
    });