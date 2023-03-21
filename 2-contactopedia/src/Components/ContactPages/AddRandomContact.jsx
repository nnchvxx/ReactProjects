import { getRandomUser } from "../../Utility/api";

const GetRandomUser = async (props) => {
  const responseFromApi = await getRandomUser();
  return props.handleAddRandomContact({
    name:
      responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
    email: responseFromApi.data.email,
    phone: responseFromApi.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomUser(props)}
      >
        Add random contact
      </button>
    </div>
  );
};

export default AddRandomContact;
