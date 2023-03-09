window.addEventListener('load', setup);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
      async function setup() {

        const ctx = document.getElementById('myChart').getContext('2d');
        const globalTemps = await getData();
        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: globalTemps.count1,
            datasets: [
              {
                label: '',
                data: globalTemps.count2,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1
              }
            ]
          },
          options: {}
        });
      }

      

      async function getData() {
        var count1=[];
        var count2=[];
        for(i=0;i<getRandomInt(20,100);i++)
        {
            count1.push(i);
            count2.push(getRandomInt(0,100))
        }
        return { count1, count2 };
      }
