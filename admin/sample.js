var ctx = document.getElementById("sampleChart");

var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"],
        datasets: [{
            label: 'Blood Pressure',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [120, 139, 133, 150, 142, 140]
        }]
    },
    options: {}
});