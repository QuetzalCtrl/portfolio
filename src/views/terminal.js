export default class {
    constructor (){
    document.addEventListener("DOMContentLoaded", function() {
        // const myconsole = document.querySelector(".terminal");
        const console_output = document.querySelector(".terminal-output");
        const console_input = document.querySelector(".message");

        // Focus input
        console_input.focus();

        document.addEventListener("click", function() {
            console_input.focus();
        });


        function createLog(message) {
            let console_log = document.createElement("p");
            let console_log_prefix = document.createElement("span");
            let console_log_message = document.createElement("span");
            console_log_prefix.setAttribute("style", "font-weight:bold;");
            console_log_prefix.innerText = "hugo@portfolio:~$ ";
            console_log.append(console_log_prefix);
            console_log_message.innerText = message;
            console_log.append(console_log_message);
            console_output.append(console_log);
            let output_message = document.createElement("p");

            switch (message) {
                case 'help':
                    output_message.innerText = "no panic";
                    break;
                case 'clear':
                    console_output.innerText = "";
                    output_message.innerText = "";
                    break;
                case 'exit':
                    window.location.replace("/");
                    break;
                case 'test':
                case '':
                    output_message.innerText = "";
                  break;
                default:
                    output_message.innerText = '"'+message+'"'+": unknown command";
                }
            console_output.append(output_message);
        }

        // Listen for when the enter key is pressed
        console_input.addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                // Get the input value
                const input_value = this.value;
                createLog(input_value);  
                console_input.value = "";
                console_input.scrollIntoView();
            }
        });
    });
    }
}