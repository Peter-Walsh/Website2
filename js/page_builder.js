function build_home(data_path) {
    let my_json = $.getJSON(data_path, (json) => {
        add("body", build_navbar(json.navigation.options)); // Adds navigation bar to the home page
    });
}

function build_projects(data_path) {
    let my_json = $.getJSON(data_path, (json) => {
        add("body", build_navbar(json.navigation.options)); // Adds navigation bar to the project page
    })
}

function add(location, element) {
    $(location).append(element);
}

function build_navbar(navbar_options) {
    let navbar_box = document.createElement("div");

    navbar_box.id = "navbar";
    navbar_box.classList = ["navbar container-fluid justify-content-start d-flex bg-dark"];

    for (let i = 0; i < navbar_options.length; i++) {
        navbar_box.append(build_link(navbar_options[i].name, 
                                 navbar_options[i].link,
                                 navbar_options[i].icon));
    }

    return navbar_box
}

function build_link(text, link, icon_class) {
    let my_link = document.createElement("a");
    my_link.classList = ["btn btn-dark text-light"];
    my_link.role = "button";
    my_link.href = link;

    my_link.append(build_icon(icon_class))
    my_link.append(" " + text);


    return my_link;
}

function build_icon(icon_class) {
    let icon = document.createElement("i");
    icon.classList = ["fas " + icon_class];
    return icon;
}







