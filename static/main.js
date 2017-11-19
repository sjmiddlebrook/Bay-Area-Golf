document.getElementById("font_color_button").onclick = change_text_color;

function change_text_color() {
    var text_color_classes = ["text-success", "text-secondary", "text-primary", "text-warning", "text-info"];
    var random_num = Math.floor(Math.random() * text_color_classes.length);
    var public_page_elements = document.getElementsByClassName("public_page");
    for (var i = 0; i < public_page_elements.length; i++) {
        console.log(public_page_elements[i].classList.length);
        // if a text color class has already been added then remove it
        if (public_page_elements[i].classList.length > 2) {
            public_page_elements[i].classList.remove(public_page_elements[i].classList.item(2));
        }
        // add the text color based on the random number
        public_page_elements[i].classList.add(text_color_classes[random_num]);
    }
}