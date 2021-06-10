import Card from "./Card";

const Reports = ({data}) => {
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
        </div>
    );
}

export default Reports;