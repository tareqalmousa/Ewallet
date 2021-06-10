import Card from "./Card";
import Chart from "react-apexcharts";

const chartRender = (data) => {
    let series = [];
    let labels = [];
    Object.entries(data).map(regregord => (
        series.push(regregord[1].value),
        labels.push(regregord[1].label)
    ));
    let chartRetrun = {
        series: series,
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: labels,
            legend: {
                position: 'bottom',
            }
        },
    };
    return chartRetrun;
};
const Reports = ({data}) => {
    const account_frozen = chartRender(data.exceptions);
    const total_transaction_amount = chartRender(data.total_transaction_amount);
    const total_transaction_count = chartRender(data.total_transaction_count);

    return (
        <div className="container pt-3">
            <div className="card-cover">
                <div className="container pt-3">
                    <h6>Transaction Average</h6>
                    <br/>
                    <div className="row">
                        <Card color={'green'} footer={'CASH in average'} body={data.cash_in_average}/>
                        <Card color={'green'} footer={'CASH in maximum'} body={data.cash_in_maximum}/>
                        <Card color={'green'} footer={'CASH in minimum'} body={data.cash_in_minimum}/>
                    </div>
                    <div className="row">
                        <Card color={'blue'} footer={'CASH out average'} body={data.cash_out_average}/>
                        <Card color={'blue'} footer={'CASH out maximum'} body={data.cash_out_maximum}/>
                        <Card color={'blue'} footer={'CASH out minimum'} body={data.cash_out_minimum}/>
                    </div>
                </div>
            </div>
            <div className="container pt-3">
                <div className="card-cover">
                    <div className="container pt-3">
                        <div className="row">
                            <div className="col">
                                <Chart
                                    options={account_frozen.options}
                                    series={account_frozen.series}
                                    type="pie"
                                    width="320"
                                />
                            </div>
                            <div className="col"> <Chart
                                options={total_transaction_amount.options}
                                series={total_transaction_amount.series}
                                type="pie"
                                width="320"
                            /></div>
                            <div className="col"> <Chart
                                options={total_transaction_count.options}
                                series={total_transaction_count.series}
                                type="pie"
                                width="320"
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;