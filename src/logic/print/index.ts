const print = (message: string | number) => {
    const container = document.querySelector('[data-container="result"]')
    if (!container) return alert('Container for result not defined')
    container.innerHTML = String(message)
}

export { print }



