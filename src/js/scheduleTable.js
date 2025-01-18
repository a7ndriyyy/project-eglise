document.addEventListener("DOMContentLoaded", () => {
    const scheduleData = [
      { day: "Неділя", time: "10:00", event: "Божественна Літургія" },
    ];
  
    const tableBody = document.querySelector("#schedule-table tbody");
  
    scheduleData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.day}</td>
        <td>${item.time}</td>
        <td>${item.event}</td>
      `;
      tableBody.appendChild(row);
    });
     
  });