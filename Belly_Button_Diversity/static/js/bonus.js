function buildGauge(WFREQ) {
    // https://plot.ly/javascript/indicator/

    var washings = parseFloat(WFREQ);
    var data = [
        {
            type: "indicator",
            mode: "gauge+number+delta",
            // value: 420,
            value: washings,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 24 } },
            // delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
            delta: { reference: 0, increasing: { color: "RebeccaPurple" } },
            gauge: {
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "aqua" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 1], color: "rgb(0,0,255)" },
                    { range: [1, 2], color: "rgb(0,0,175)" },
                    { range: [2, 3], color: "rgb(0,0,150)"},
                    { range: [3, 4], color: "rgb(0,0,125)"},
                    { range: [4, 5], color: "rgb(0,0,100)"},

                    { range: [5, 6], color: "rgb(0,0,75)"},
                    { range: [6, 7], color: "rgb(0,0,50)"},
                    { range: [7, 8], color: "rgb(0,0,25)"},
                    { range: [8, 9], color: "rgb(0,0,5)"}
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    // value: 490
                    value: 9
                }
            }
        }
    ];

    var layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "lavender",
        font: { color: "darkblue", family: "Arial" }
    };

    var gauge = document.getElementById("gauge");
    Plotly.newPlot(gauge, data, layout);


}
