import { useSelector } from "react-redux";
import DataTable from "../containers/DataTable";
import RegistrationForm from "../containers/RegistrationForm";
import { selectUsersList } from "../redux/userSlice";


const data = [
    {
      id: "1",
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421",
    },
    {
      id: "2",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      start_date: "2011/07/25",
      office: "Tokyo",
      extn: "8422",
    },
  ];

  const columns = [
    { data: "name", title: "Name" },
    { data: "age", title: "Age" },
    { data: "sex", title: "Sex" },
    { data: "mobile", title: "Mobile" },
    { data: "idType", title: "ID Type" },
    { data: "idNumber", title: "ID" },
  ];

const Home: React.FC = () => {

    const usersList = useSelector(selectUsersList);

    return (
        <>
            <RegistrationForm />
            <DataTable data={usersList} columns={columns} />
        </>
    );
}

export default Home;