(function() {
    let query = window.location.search.substring(1);
    let percent_encoded = atob(query);
    let encoded_url = percent_encoded.substring(percent_encoded.indexOf("http"));
    let decoded = decodeURIComponent(encoded_url);
    let url = decoded.substring(0, decoded.indexOf('"'));

    let a = document.createElement("a");
    a.setAttribute("href", url);
    document.body.appendChild(a);
    a.click();
})();
