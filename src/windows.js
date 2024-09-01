document.addEventListener('DOMContentLoaded', function () {
    const datetimeDisplay = document.getElementById('datetime');
    function getCurrentDateTime() {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth();
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0'); 
        const minutes = String(now.getMinutes()).padStart(2, '0'); 
        return `${day}-${month}-${year}\n${hours}:${minutes}`;
    }
    datetimeDisplay.textContent = getCurrentDateTime();
    setInterval(() => {
        datetimeDisplay.textContent = getCurrentDateTime();
    }, 1000);
});
