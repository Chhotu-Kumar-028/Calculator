let display = document.querySelector("input[name='display']");
let buttons = document.querySelectorAll("input[type='button']");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let value = buttons[i].value;

        if (value === "AC") {
            display.value = "";
        } 
        else if (value === "DE") {
            display.value = display.value.toString().slice(0, -1);
        } 
        else if (value === "=") {
            try {
                // Using Function is a simple alternative to avoid the strict 'eval' warning
                let result = new Function("return " + display.value)();
                display.value = result;
            } catch (error) {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
}
