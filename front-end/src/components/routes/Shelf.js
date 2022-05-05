import React from "react";
import AllBooks from "../apiCalls/AllBooks";
import FullName from "../apiCalls/FullName";
import PartialName from "../apiCalls/PartialName";
import Field from "../apiCalls/Field";
import AddBook from "../apiCalls/AddBook";
import RemoveBook from "../apiCalls/RemoveBook";
import UpdateBook from "../apiCalls/UpdateBook";

class Shelf extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedValue:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    renderSelectedForm(param) {
        switch(param) {
            case 'get_all_books':
                return <form name="get_all_books" id="get_all_books">
                    <AllBooks />
                </form>;
            case 'get_book_by_fullname':
                return <form name="get_book_by_fullname" id="get_book_by_fullname">
                    <FullName />
                </form>;
            case 'get_book_by_partialname':
                return <form name="get_book_by_partialname" id="get_book_by_partialname">
                    <PartialName />
                </form>;
            case 'get_all_books_by_field':
                return <form name="get_all_books_by_field" id="get_all_books_by_field">
                    <Field />
                </form>;
            case 'add_book':
                return <form name="add_book" id="add_book">
                    <AddBook />
                </form>;
            case 'remove_book_by_id':
                return <form name="remove_book_by_id" id="remove_book_by_id">
                    <RemoveBook />
                </form>;
            case 'update_book':
                return <form name="update_book" id="update_book">
                    <UpdateBook />
                </form>;
            default:
                return null;
        }
    }

    handleChange(event) { this.setState({selectedValue: event.target.value}); }

    render() {
        return (
            <div className="fomes"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                }}
            >
                <div>
                    <form >
                        <select value={this.state.selectedValue} onChange={this.handleChange}>
                            <option value="" selected="selected"></option>
                            <option value="get_all_books">Get all books </option>
                            <option value="get_book_by_fullname">Get a book by it's full-name </option>
                            <option value="get_book_by_partialname">Get all books containing a specific word </option>
                            <option value="get_all_books_by_field">Get all books within a field </option>
                            <option value="add_book">Add a book </option>
                            <option value="remove_book_by_id">Remove a book by it's id</option>
                            <option value="update_book">Update a book</option>
                        </select>
                    </form>
                    {this.renderSelectedForm(this.state.selectedValue)}
                </div>
            </div>
        );}
}

export default Shelf;