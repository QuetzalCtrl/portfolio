export default class {
    constructor (){
    document.addEventListener("DOMContentLoaded", function() {

        String.prototype.hashCode = function() {
            var hash = 0,
                i, chr;
            if (this.length === 0) return hash;
            for (i = 0; i < this.length; i++) {
                chr = this.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }
        function askforoot() {
            // let pass = prompt("Root password ?", "password");
            // Sup3Rs3cUr3P@sSw0rD
            return (prompt("Root password ?", "password").hashCode() == -1220956677)
        }

        // const myconsole = document.querySelector(".terminal");
        const console_output = document.querySelector(".terminal-output");
        const console_input = document.querySelector(".message");

        // Focus input
        console_input.focus();
        document.addEventListener("click", function() {
            console_input.focus();
        });

        let cmd_history = []
        let history_pos = 0;
        let current_path = ['home','hugo']
        let dir_files = ['secret.txt']
        function createLog(message) {
            if(message != "")
                cmd_history.push(message)
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
                case message.match(/^help /)?.input || 'help':
                    output_message.innerHTML = "Here's a list of useful commands you can try. Note that not every commands are written here, so feel free to test and explore!<br><br>"+
                    "<pre><strong>whoami</strong>          displays informations about me\n"+
                    "<strong>contactme</strong>       displays some links to reach me out\n"+

                    "<strong>cv</strong>              downloads the latest version of my CV in PDF\n"+
                    "    --lang -l      specify the language, french (FR) or english (EN, default value)\n"+
                    "                   ex: cv --lang FR \n"+

                    "<strong>clear</strong>           clears the terminal output\n"+

                    "<strong>exit</strong>            exits the terminal view, redirects to the home page\n"+
                    "</pre>";
                    break;
                case message.match(/^clear /)?.input || 'clear':
                    console_output.innerText = "";
                    output_message.innerText = "";
                    break;
                case message.match(/^whoami /)?.input || 'whoami':
                    output_message.innerHTML = "Hugo Vanrobaeys, 21, Computer Science student at the university of Lille (France), <a href='https://github.com/QuetzalCtrl' style='text-decoration: underline;'>https://github.com/QuetzalCtrl</a>";
                    break;
                case message.match(/^pwd /)?.input || 'pwd': 
                    if(current_path.length>0)
                        current_path.forEach(dir => output_message.innerText += "/"+dir)
                    else 
                    output_message.innerText = "/"
                    break;
                case message.match(/^ls /)?.input || 'ls': 
                    dir_files.forEach(file => output_message.innerText += file+" ");
                    break;
                case message.match(/^cat \/home\/hugo\/secret.txt/)?.input: 
                    output_message.innerText ="cm9vdCBwYXNzOiBTdXAzUnMzY1VyM1BAc1N3MHJECg==";
                    break;
                case message.match(/^cat secret.txt/)?.input || message.match(/^cat .\/secret.txt/)?.input: 
                    if(current_path.length == 2 && current_path[0] == "home" && current_path[1] == "hugo") 
                        output_message.innerText ="cm9vdCBwYXNzOiBTdXAzUnMzY1VyM1BAc1N3MHJECg==";
                    break;
                case message.match(/^cat hugo\/secret.txt/)?.input || message.match(/^cat .\/hugo\/secret.txt/)?.input:
                    if(current_path.length == 1 && current_path[0] == "home") 
                        output_message.innerText ="cm9vdCBwYXNzOiBTdXAzUnMzY1VyM1BAc1N3MHJECg==";
                    break;
                case message.match(/^cat flag.txt/)?.input || message.match(/^cat .\/flag.txt/)?.input: 
                    if(current_path.length == 1 && current_path[0] == "root")  
                        console_input.value = "";
                        if(askforoot())
                            output_message.innerText ="You now have root privileges on a fake JS Terminal ! I don't really know what it's worth, but congratulations anyway :)";
                        else
                            output_message.innerText ="permission denied"
                    break;
                case message.match(/^cat \/root\/flag.txt/)?.input:
                    console_input.value = "";
                    if(askforoot())
                        output_message.innerText ="You now have root privileges on a fake JS Terminal ! I don't really know what it's worth, but congratulations anyway :)";
                    else
                        output_message.innerText ="permission denied"
                    break;
                case message.match(/^cd /)?.input:
                    message = message.substring(3);
                    if(message == "..") {
                        dir_files = [];
                        dir_files.push(current_path.pop());
                    }else if(message == "/") {
                        current_path = [];
                    }else if(message.match(/^\//)?.input) {
                        if(message.substring(1)=="home")
                            current_path = ['home'];
                        else if(message.substring(1)=="root"){
                            current_path = ['root']
                        }else if(message.substring(1)=="home/hugo"){
                            current_path = ['home', 'hugo']
                        }
                    }else if(dir_files.includes(message)){
                        if(message.split(".").pop() != "txt")
                            current_path.push(message);
                        else 
                            output_message.innerText = "cd: "+message+": Not a directory";
                    }else if(message != "." && message != ""){
                        output_message.innerText = "cd: "+message+": No such file or directory";
                    }
                    if(current_path.length == 0){
                        dir_files = ['home', 'root'];
                    }else if(current_path.length == 1){
                        if(current_path[0] == "home")
                            dir_files = ['hugo']
                        else if(current_path[0] == "root"){
                            dir_files = ['flag.txt']
                        }else {
                            dir_files = []
                        }
                    }else if(current_path.length == 2){
                        dir_files = ['secret.txt']
                    }
                    break;
                case message.match(/^contactme /)?.input || 'contactme':
                    output_message.innerHTML = "<ul><li>My E-mail address : <a href='mailto:hugo.vrbs@gmail.com' style='text-decoration: underline;'>hugo.vrbs@gmail.com</a></li>"+
                    "<li>My LinkedIn : <a href='https://www.linkedin.com/in/hugo-vanrobaeys' style='text-decoration: underline;'>https://www.linkedin.com/in/hugo-vanrobaeys</a></li>"+
                    "<li>My GitHub : <a href='https://github.com/QuetzalCtrl' style='text-decoration: underline;'>https://github.com/QuetzalCtrl</a></li>"+
                    "<li>My TryHackMe : <a href='https://tryhackme.com/p/QuetzalCoatl' style='text-decoration: underline;'>https://tryhackme.com/p/QuetzalCoatl</a></li>"+
                    "<li>My HackTheBox : <a href='https://app.hackthebox.com/profile/195524' style='text-decoration: underline;'>https://app.hackthebox.com/profile/195524</a></li></ul>";
                    break;
                case message.match(/^cv /)?.input || 'cv':
                    var link = document.createElement('a');
                    link.href = '/';
                    if(message.match(/^cv --lang FR/)?.input || message.match(/^cv -l FR/)?.input) 
                        link.download = 'CV_Hugo_Vanrobaeys_FR.pdf';
                    else
                        link.download = 'CV_Hugo_Vanrobaeys_EN.pdf';

                    link.dispatchEvent(new MouseEvent('click'));
                    break;
                case message.match(/^exit /)?.input || 'exit':
                    window.location.replace("/");
                    break;
                case 'cd':
                case 'cat':
                case '':
                    output_message.innerText = "";
                    break;
                case message.match(/^cat /)?.input:
                    output_message.innerText = "cat: "+message.substring(4)+": no such file or directory";
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
                history_pos = cmd_history.length;

            // UP
            }else if(event.keyCode === 38){
                if(history_pos > 0){
                    history_pos--;
                    console_input.value = cmd_history[history_pos]
                }
            // DOWN
            }else if(event.keyCode === 40){
                if(history_pos < cmd_history.length){
                    console_input.value = cmd_history[history_pos]
                    history_pos++;
                }else if (history_pos == cmd_history.length){
                    console_input.value = "";
                }
            }
        });
    });
    }
}