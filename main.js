
  let blocks = document.querySelectorAll("pre");
  async function copyToClipboard(){
    Array.from(blocks).forEach((block) => {
       let button = block.querySelector("i");
       let code = block.querySelector("code");
       button.onclick = async () => {
            let text = code.innerText;
             await navigator.clipboard.writeText(text);
             alert("Text copied to clipboard");
       }
    })
  }
copyToClipboard();
