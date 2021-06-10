import {Tab, Tabs} from "react-bootstrap";

const TabMain = ({data}) => {
    return (
        <Tabs defaultActiveKey="Dashboard"  >
            <Tab eventKey="Dashboard" title="Dashboard">
                <div className="container pt-3">
                </div>
            </Tab>
            <Tab eventKey="ewallet_cash_out" title="ewallet_cash_out">
                <div className="container pt-3">
                </div>
            </Tab>
            <Tab eventKey="fnb_cash_out" title="fnb_cash_out">
                <div className="container pt-3">
                </div>
            </Tab>
            <Tab eventKey="masterpass_cash_in" title="masterpass_cash_in">
                <div className="container pt-3">
                </div>
            </Tab>
        </Tabs>
    );
}

export default TabMain;