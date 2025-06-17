const colors = {
  orange: getComputedStyle(document.documentElement)
    .getPropertyValue("--orange")
    .trim(),
  blue: getComputedStyle(document.documentElement)
    .getPropertyValue("--blue")
    .trim(),
  purple: getComputedStyle(document.documentElement)
    .getPropertyValue("--purple")
    .trim(),
  green: getComputedStyle(document.documentElement)
    .getPropertyValue("--green")
    .trim(),
  red: getComputedStyle(document.documentElement)
    .getPropertyValue("--red")
    .trim(),
};

function showWelcome() {
  return `
[[;${colors.green};]
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝]
${showHelp()}
`;
}

function showHelp() {
  return `
[[;${colors.orange};]
Available commands:
  help        - Displays this help menu
  whoareyou   - About me
  whoami      - About you
  email       - My Email
  linkedin    - My Linkedin
  github      - My Github

Feel free to try out some other commands :)]
`;
}

$("body").terminal(
  function(command, term) {
    const cmd = command.trim().toLowerCase();
    switch (true) {
      case cmd === "":
        break;
      case cmd === "help":
        term.echo(showHelp());
        break;
      case cmd === "whoareyou":
        term.echo(
          "\nMy name is Rishi Bidarkota and I am an aspiring Software Engineer.\n",
        );
        break;
      case cmd === "whoami":
        term.echo("\nI don't know who you are. Why are you asking me?\n");
        break;
      case cmd === "email":
        term.echo(`\nEmail me at [[;${colors.blue};]rbidarko@stevens.edu]\n`);
        break;
      case cmd === "linkedin":
        term.echo("\nOpening my Linkedin...\n");
        window.open("https://www.linkedin.com/in/rishibidarkota/", "_blank");
        break;
      case cmd === "github":
        term.echo("\nOpening my Github...\n");
        window.open("https://github.com/rkb121541", "_blank");
        break;
      case cmd.startsWith("sudo"):
        term.echo(
          `[[;${colors.purple};]\nWhat makes you think you have administrative privileges?\n]`,
        );
        setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=nPrWo5pEvyk", "_blank");
        }, 1000);
        break;
      case cmd.startsWith("rm"):
        term.echo(
          `[[;${colors.purple};]\nWhy are you trying to remove things ?\n]`,
        );
        setTimeout(() => {
          window.open("https://www.youtube.com/watch?v=LpsIp5KTeug", "_blank");
        }, 1000);
        break;
      default:
        term.echo(`[[;${colors.red};]\nCommand not found: ${command} \n]`);
        break;
    }
  },
  {
    greetings: showWelcome(),
    render: true,
    keymap: {
      "CTRL+R": function() {
        return false;
      },
    },
    keydown: function(e) {
      if (e.which == 82 && e.ctrlKey) {
        return true;
      }
    },
  },
);
