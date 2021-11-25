
// Create a function to change the hash 
// value of the page and reload it
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
    
  // Define the language reload anchors
  var language = {
    eng: {
      welcome:
        "I have high knowledge of the Computer family, I design web pages, I perfectly control the user interface of the most common Operating Systems, I am managed by a Linux command line interface, also assembly and disassembly as well as maintenance systems and the creation and maintenance of Local Networks.",
    },
    es: {
      welcome:
        "Tengos altos conocimientos de la familia de la Informática, se diseñar páginas web, controlo a la perfección la interfaz de usuario de los Sistemas Operativos más comunes, se manejarme por una interfaz de linea de comandos de Linux, también el montaje y desmontaje como su mantenimiento de sistemas y la creación y mantenimiento de Redes Locales.",
    },
    hin: {
      welcome:
        "Ich verfüge über hohe Kenntnisse der Computerfamilie, entwerfe Webseiten, beherrsche die Benutzeroberfläche der gängigsten Betriebssysteme perfekt, werde von einer Linux-Kommandozeilenschnittstelle verwaltet, auch den Auf- und Abbau als Wartungssysteme und die Erstellung und Wartung lokaler Netzwerke.",
    },
  };
    
  // Check if a hash value exists in the URL
  if (window.location.hash) {
    
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#es") {
      siteContent.textContent = language.es.welcome;
    } else if (window.location.hash == "#hin") {
      siteContent.textContent = language.hin.welcome;
    }
  }