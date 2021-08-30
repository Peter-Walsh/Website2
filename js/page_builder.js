// This file will contain all of the things that need to be built for each page
// that is a part of the website. Like navigation bar, etc.
function load_navbar(data_path) {
    var my_json = $.getJSON(data_path, (json) => {
        add("body", build_navbar(json.navigation.options)); // Adds navigation bar to the page
    });
}

function add(location, element) {
    $(location).append(element);
}

function build_navbar(navbar_options) {
    var navbar_box = document.createElement("div");
    var navbar_row = document.createElement("div");

    navbar_box.id = "navbar";
    navbar_box.classList = ["container"];

    navbar_row.classList = ["row justify-content-start"];

    for (let i = 0; i < navbar_options.length; i++) {
        var option = document.createElement("div");
        option.classList = ["col bg-primary"];

        option.append(build_link(navbar_options[i].name, navbar_options[i].link));
        navbar_row.append(option);
    }

    return navbar_box.appendChild(navbar_row);
}

function build_link(text, link) {
    var my_link = document.createElement("a");
    my_link.classList = ["text-light"]

    my_link.href = link;
    my_link.append(text);
    return my_link;
}




