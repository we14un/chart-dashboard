import React from 'react';
import Chart from 'chart.js/auto'
import 'chartjs-adapter-moment'

class ChartCandleSticks extends React.Component {

    async componentDidMount() {
        await this.setChartData();
    }

    async setChartData() {

        var color
        var processedData = []
        var processedColor = []

        try {
            const response = await fetch("https://api-futures.kucoin.com/api/v1/kline/query?symbol=MATICUSDTM&granularity=1")
            const data_response = await response.json()
            data_response.data.forEach(indiv_data => {
                var time = indiv_data[0]
                var opening = indiv_data[1].toFixed(4)
                var closing = indiv_data[4].toFixed(4)
                var high = indiv_data[2].toFixed(4)
                var low = indiv_data[3].toFixed(4)
                var bars = [opening, closing]

                if (closing >= opening) {
                    color = 'rgba(75, 192, 192, 1)'
                }
                else {
                    color = 'rgba(255, 26, 104, 0.2)'
                }
                
                processedColor.push(color)

                processedData.push({x:time, o: opening, c: closing, h: high, l: low, bar: bars})
                
            })
            console.log(processedColor)
            console.log(processedData)
            ;

            


    }

        catch(error) {

            console.log("Sorry for the error: ",error)

        }

        // setup

        const chartData = {
            labels: [],
            datasets: [{
            
            data: processedData,
            backgroundColor: processedColor,
            borderColor: [
                
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1,
            borderSkipped: false
            }]
        };

        const candlestick = {
            id: 'candlestick',
            beforeDatasetsDraw(chart, args, pluginOptions) {
                const { ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {x, y}
            } = chart;

                ctx.save();
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0,0,0,1)'
            }
        }

        // config 
        const config = {
            type: 'bar',
            data: chartData,
            options: {
                parsing: {
                  
                    yAxisKey: 'bar',
                },
            scales: {
                x: {
                    type: 'timeseries',
                    time: {
                        unit: 'min'
                    },
                    display: false
                },
            
                y: {
                beginAtZero: false}
                }

            },
            plugins: [candlestick]
        
        }

        // Render chart
        this.myChart = new Chart(document.getElementById('myChart'), config);


        }

        

    

    render() {
        return (
        <div>
            <div className="chartMenu">
            <p>WWW.CHARTJS3.COM (Chart JS <span id="chartVersion"></span>)</p>
            </div>
            <div className="chartCard">
            <div className="chartBox">
                <canvas id="myChart"></canvas>
            </div>
            </div>
        </div>
        );
    }

}


export default ChartCandleSticks