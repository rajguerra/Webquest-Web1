
	  google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChartPie);
	  google.charts.setOnLoadCallback(drawChartBar);


      function drawChartPie() {

        var data = google.visualization.arrayToDataTable([
          ['Categoria', 'Qt de Pessoas'],
          ['Comparecimento',     57775813,],
          ['Abstenção',      16268252],
        ]);

        var options = {
          title: 'Porcentagem de Abstenção de Votos em 2022',
		  slices: {
			0: {color: '#056ac8'},
			1: {color: '#e6f0fa'}
		  },
		  pieSliceTextStyle: {
            color: 'black',
          },
		  backgroundColor: 'none'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

function drawChartBar() {
        var data = google.visualization.arrayToDataTable([
		['Ano', 'Comparecimento', 'Abstenção'],
  		['2014', 115124714, 27697332,],
  		['2018', 117366956, 29939319,],
  		['2022', 123737271, 32716740,],
        ]);

        var options = {
          chart: {
            title: 'Comparação de Votos e Abstenções ao longo dos anos',
            subtitle: 'Comparação de   : 2014-2022',
          },
		  backgroundColor: 'none'
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      };