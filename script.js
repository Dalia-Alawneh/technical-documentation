function copyToClipboard(copyButton) {
    const codeBlock = copyButton.previousElementSibling;
    const codeToCopy = codeBlock.textContent.trim(); 

    navigator.clipboard.writeText(codeToCopy)
        .then(() => {
            const icon = copyButton.querySelector('i');
            icon.classList.remove('fa-copy');
            icon.classList.add('fa-check');
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-copy');
            }, 1000)
        })
        .catch((error) => {
            console.error("Failed to copy: ", error);
        });
}
