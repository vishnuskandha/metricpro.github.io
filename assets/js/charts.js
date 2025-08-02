// Chart configuration and initialization
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Chart.js to be loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded');
        return;
    }

    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: {
                        family: 'Inter',
                        size: 12
                    }
                }
            }
        }
    };

    // Company Performance Chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Sales (in thousands)',
                    data: [1000, 1170, 1350, 1580],
                    borderColor: '#1e40af',
                    backgroundColor: 'rgba(30, 64, 175, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Expenses (in thousands)',
                    data: [400, 460, 520, 580],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    }
                }
            }
        });
    }

    // Customer Satisfaction Chart
    const satisfactionCtx = document.getElementById('satisfactionChart');
    if (satisfactionCtx) {
        new Chart(satisfactionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Excellent', 'Good', 'Fair', 'Poor'],
                datasets: [{
                    data: [45, 30, 20, 5],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                ...commonOptions,
                cutout: '60%',
                plugins: {
                    ...commonOptions.plugins,
                    legend: {
                        ...commonOptions.plugins.legend,
                        position: 'right'
                    }
                }
            }
        });
    }

    // KPI Chart
    const kpiCtx = document.getElementById('kpiChart');
    if (kpiCtx) {
        new Chart(kpiCtx, {
            type: 'radar',
            data: {
                labels: ['Performance', 'Quality', 'Efficiency', 'Innovation', 'Customer Focus', 'Team Work'],
                datasets: [{
                    label: 'Current Score',
                    data: [85, 90, 78, 82, 88, 85],
                    borderColor: '#1e40af',
                    backgroundColor: 'rgba(30, 64, 175, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#1e40af',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }, {
                    label: 'Target Score',
                    data: [90, 95, 85, 90, 92, 88],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Trend Analysis Chart
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        new Chart(trendCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Feedback Volume',
                    data: [120, 150, 180, 220, 250, 280],
                    backgroundColor: 'rgba(30, 64, 175, 0.8)',
                    borderColor: '#1e40af',
                    borderWidth: 1,
                    borderRadius: 4
                }, {
                    label: 'Satisfaction Score',
                    data: [4.2, 4.3, 4.1, 4.4, 4.5, 4.6],
                    type: 'line',
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        min: 0,
                        max: 5,
                        grid: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter'
                            }
                        }
                    }
                }
            }
        });
    }

    // Chart animation on scroll
    const chartContainers = document.querySelectorAll('canvas');
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.3
    });

    chartContainers.forEach(canvas => {
        canvas.style.opacity = '0';
        canvas.style.transform = 'translateY(20px)';
        canvas.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        chartObserver.observe(canvas);
    });
});

// Chart utility functions
function updateChartData(chart, newData) {
    chart.data.datasets.forEach((dataset, index) => {
        dataset.data = newData[index];
    });
    chart.update();
}

function downloadChart(chartId, filename) {
    const canvas = document.getElementById(chartId);
    if (canvas) {
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'chart.png';
        a.click();
    }
}

// Export functions for external use
window.ChartUtils = {
    updateChartData,
    downloadChart
};
