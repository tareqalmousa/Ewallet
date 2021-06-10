import {Tab, Tabs} from "react-bootstrap";
import Table from "./Table";
import Reports from "./Reports";

const TabMain = ({data}) => {
    const dashboard =  data.dashboard;
    const ewallet_cash_out = data.report_data.ewallet_cash_out;
    const fnb_cash_out = data.report_data.fnb_cash_out;
    const masterpass_cash_in = data.report_data.masterpass_cash_in;

    const columns_ewallet_cash_out = [
        {name: "amount", selector: "amount", sortable: true},
        {name: "channel", selector: "channel", sortable: true},
        {name: "currency", selector: "currency", sortable: true},
        {name: "ewallet_transaction_id", selector: "ewallet_transaction_id", sortable: true},
        {name: "exceptions", selector: "exceptions", sortable: true},
        {name: "instrument", selector: "instrument", sortable: true},
        {name: "mobile_number", selector: "mobile_number", sortable: true},
        {name: "sportpesa_transaction_id", selector: "sportpesa_transaction_id", sortable: true},
        {name: "status", selector: "status", sortable: true},
        {name: "sub_channel", selector: "sub_channel", sortable: true},
        {name: "time", selector: "time", sortable: true},
        {name: "type", selector: "type", sortable: true}
    ];
    const columns_fnb_cash_out = [
        {name: "amount", selector: "amount", sortable: true},
        {name: "channel", selector: "channel", sortable: true},
        {name: "currency", selector: "currency", sortable: true},
        {name: "exceptions", selector: "exceptions", sortable: true},
        {name: "fnb_transaction_id", selector: "fnb_transaction_id", sortable: true},
        {name: "instrument", selector: "instrument", sortable: true},
        {name: "mobile_number", selector: "mobile_number", sortable: true},
        {name: "sportpesa_transaction_id", selector: "sportpesa_transaction_id", sortable: true},
        {name: "status", selector: "status", sortable: true},
        {name: "sub_channel", selector: "sub_channel", sortable: true},
        {name: "time", selector: "time", sortable: true},
        {name: "type", selector: "type", sortable: true}
    ];
    const columns_masterpass_cash_in = [
        {name: "amount", selector: "amount", sortable: true},
        {name: "channel", selector: "channel", sortable: true},
        {name: "currency", selector: "currency", sortable: true},
        {name: "masterpass_transaction_id", selector: "masterpass_transaction_id", sortable: true},
        {name: "exceptions", selector: "exceptions", sortable: true},
        {name: "instrument", selector: "instrument", sortable: true},
        {name: "mobile_number", selector: "mobile_number", sortable: true},
        {name: "sportpesa_transaction_id", selector: "sportpesa_transaction_id", sortable: true},
        {name: "status", selector: "status", sortable: true},
        {name: "sub_channel", selector: "sub_channel", sortable: true},
        {name: "time", selector: "time", sortable: true},
        {name: "type", selector: "type", sortable: true}
    ];


    return (
        <Tabs defaultActiveKey="Dashboard"  >
            <Tab eventKey="Dashboard" title="Dashboard">
                <div className="container pt-3">
                    <Reports data={dashboard}/>
                </div>
            </Tab>
            <Tab eventKey="ewallet_cash_out" title="ewallet_cash_out">
                <div className="container pt-3">
                    <Table columns={columns_ewallet_cash_out} data={ewallet_cash_out.data}/>
                    <div>
                        total payable commission: {ewallet_cash_out.total_payable_commission}
                        <hr/>
                        total transaction amount: {ewallet_cash_out.total_transaction_amount}
                        <hr/>
                        total transaction count: {ewallet_cash_out.total_transaction_count}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="fnb_cash_out" title="fnb_cash_out">
                <div className="container pt-3">
                    <Table columns={columns_fnb_cash_out} data={fnb_cash_out.data}/>
                    <div>
                        total payable commission: {fnb_cash_out.total_payable_commission}
                        <hr/>
                        total transaction amount: {fnb_cash_out.total_transaction_amount}
                        <hr/>
                        total transaction count: {fnb_cash_out.total_transaction_count}
                    </div>
                </div>
            </Tab>
            <Tab eventKey="masterpass_cash_in" title="masterpass_cash_in">
                <div className="container pt-3">
                    <Table columns={columns_masterpass_cash_in} data={masterpass_cash_in.data}/>
                    <div>
                        total payable commission: {masterpass_cash_in.total_payable_commission}
                        <hr/>
                        total transaction amount: {masterpass_cash_in.total_transaction_amount}
                        <hr/>
                        total transaction count: {masterpass_cash_in.total_transaction_count}
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default TabMain;