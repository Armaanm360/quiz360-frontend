import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SidebarLayout from './Components/Navigation/SidebarLayout';
import Main from './Components/Layout/Main';
import Apon from './Components/Layout/Apon';
import Approvals from './Pages/Approvals/Approvals';
import Attendence from './Pages/Attendence/Attendence';
import Employees from './Pages/Employees/Employees';
import Investments from './Pages/Investments/Investments';
import PayRuns from './Pages/Pay Runs/PayRuns';
import SalaryDetails from './Pages/Salary Details/SalaryDetails';
import TimeClock from './Pages/TimeClock/TimeClock';
import Reports from './Pages/Reports/Reports';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/AuthPages/Login';
import Ngo from './Pages/Ngo/Nog';
import SingleNgo from './Pages/Ngo/SingleNgo';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,children:[
      {
      path:"/approvals",
      element:<Approvals></Approvals>
      },
      {
      path:"/",
      element:<Dashboard></Dashboard>
      },
      {
      path:"/attendence",
      element:<Attendence></Attendence>
      },
      {
      path:"/employees",
      element:<Employees></Employees>
      },
      {
      path:"/investments",
      element:<Investments></Investments>
      },
      {
      path:"/payruns",
      element:<PayRuns></PayRuns>
      },
      {
      path:"/salarydetails",
      element:<SalaryDetails></SalaryDetails>
      },
      {
      path:"/timeclock",
      element:<TimeClock></TimeClock>
      },
      {
      path:"/reports",
      element:<Reports></Reports>
      },
      {
      path:"/ngo",
      element:<Ngo></Ngo>
      },
      {
      path:'ngo/:singledetail',
      loader:async({params})=>{
        // console.log(params.singledetail);
       return fetch(`http://192.168.0.227/myPractisebackend/api/single-ngo/${params.singledetail}`);

      },
      element:<SingleNgo></SingleNgo>
    }
      ]
    },
     {
      path:"/login",
      element:<Login></Login>
      },

  ]);
  return (
    <div className="App">
            <RouterProvider router={router}>
        <SidebarLayout></SidebarLayout>
      </RouterProvider>

    </div>
  );
}

export default App;
