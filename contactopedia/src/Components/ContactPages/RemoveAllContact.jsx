const RemoveAllContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.removeAllContacts()}
      >
        Remove all
      </button>
    </div>
  );
};

export default RemoveAllContact;
