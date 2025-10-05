import ServicesTable from "./Services/ServicesTable.jsx";
import RecentCustomers from "./Customers/RecentCustomer.jsx";
import CafeInformation from "./InfoCards/CafeInformation.jsx";


const Dashboard = () => {
    return (
        <div className="flex-1 ">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <ServicesTable />
                    <RecentCustomers />
                </div>
                <div className="col-span-1">
                    <CafeInformation />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
