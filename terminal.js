function showWelcome() {
  return `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

${showHelp()}
`;
}

function showHello() {
  return `
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
`;
}

function showHi() {
  return `
██╗  ██╗██╗
██║  ██║██║
███████║██║
██╔══██║██║
██║  ██║██║
╚═╝  ╚═╝╚═╝
`;
}

function showHelp() {
  return `
Available commands:
  help        - Displays this help menu
  hello       - Displays the 'HELLO' banner
  hi          - Displays the 'HI' banner
  whoareyou   - About me
  whoami      - About you
  email       - My Email
  linkedin    - My Linkedin
  github      - My Github
  website     - My other website (coming soon)

Feel free to try out some other commands :)
`;
}

$("body").terminal(
  function (command, term) {
    const cmd = command.trim().toLowerCase();
    switch (true) {
      case cmd === "":
        break;
      case cmd === "help":
        term.echo(showHelp());
        break;
      case cmd === "hello":
        term.echo(showHello());
        break;
      case cmd === "hi":
        term.echo(showHi());
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
        term.echo("\nEmail me at rbidarko@stevens.edu\n");
        break;
      case cmd === "linkedin":
        term.echo("\nOpening my Linkedin...\n");
        window.open("https://www.linkedin.com/in/rishibidarkota/", "_blank");
        break;
      case cmd === "github":
        term.echo("\nOpening my Github...\n");
        window.open("https://github.com/rkb121541", "_blank");
        break;
      case cmd === "website":
        term.echo("\nNot ready yet, coming soon.\n");
        // window.open("", "_blank");
        break;
      case cmd.startsWith("sudo"):
        term.echo("\nWhat makes you think you have administrative privileges?\n");
        window.open("https://www.youtube.com/watch?v=nPrWo5pEvyk", "_blank");
        break;
      case cmd.startsWith("rm"):
        term.echo("\nWhy are you trying to remove things?\n");
        window.open("https://www.youtube.com/watch?v=LpsIp5KTeug", "_blank");
        break;
      default:
        term.echo(`\nCommand not found: ${command}\n`);
        break;
    }
  },
  {
    greetings: showWelcome(),
    keymap: {
      "CTRL+R": function () {
        return false;
      },
    },
    keydown: function (e) {
      if (e.which == 82 && e.ctrlKey) {
        return true;
      }
    },
  },
);
