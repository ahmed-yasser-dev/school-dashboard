// Data => البيانات
const nationalitiesData = {
    labels: ['سعودي', 'مصري', 'يمني', 'باكستاني', 'سوداني', 'أخرى'],
    numbers: [620, 280, 150, 95, 65, 40]
};

const regionsData = {
    labels: ['أول ابتدائي', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس'],
    numbers: [220, 215, 208, 212, 198, 197]
};

// Chart => الجنسيات
const ctx1 = document.getElementById('nationalitiesChart').getContext('2d');
new Chart (ctx1, {
    type: 'doughnut',
    data: {
        labels: nationalitiesData.labels,
        datasets: [{
            data: nationalitiesData.numbers,
            backgroundColor: ['#4f8ef7','#f7c948','#50e3c2','#f75f4f','#a8f77a','#c97af7']
        }]
    }
});

const ctx2 = document.getElementById('regionsChart').getContext('2d');
new Chart (ctx2, {
    type: 'bar',
    data: {
        labels: regionsData.labels,
        datasets: [{
            label: 'عدد الطلاب',
            data: regionsData.numbers,
            backgroundColor: '#5ff5cf'
        }]
    }
})