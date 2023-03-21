import React from "react";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-6666",
          email: "ben@gmail.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "John Smith",
          phone: "666-666-6666",
          email: "john@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Emil Nenchev",
          phone: "666-666-6666",
          email: "emil@gmail.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name == "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please enter a valid phone" };
    }

    const dublicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (dublicateRecord.length > 0) {
      return { status: "failure", msg: "Dublicate record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
    }
    return { status: "success", msg: "Contact was added successfully" };
  };

  handleToggleFavorite = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  handleDelete = (contactId) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((obj) => {
          return obj.id !== contactId;
        }),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAll = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateClick = (contact) => {
    this.setState(() => {
      return {
        isUpdating: true,
        selectedContact: contact,
      };
    });
  };

  handleCancelUpdateClick = () => {
    this.setState(() => {
      return {
        isUpdating: false,
        selectedContact: undefined,
      };
    });
  };

  handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);
    if (updatedContact.name == "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (updatedContact.phone == "") {
      return { status: "failure", msg: "Please enter a valid phone" };
    }
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == updatedContact.id) {
            return {
              ...obj,
              name: updatedContact.name,
              phone: updatedContact.phone,
              email: updatedContact.email,
            };
          } else {
            return obj;
          }
        }),
        isUpdating: false,
        selectedContact: undefined,
      };
    });

    return { status: "success", msg: "Contact was updated successfully" };
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact removeAllContacts={this.handleRemoveAll} />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handleAddContact={this.handleAddContact}
                  cancelUpdateContact={this.handleCancelUpdateClick}
                  handleUpdate={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavorite == true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDelete}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavorite == false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                  deleteContact={this.handleDelete}
                  updateClick={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
