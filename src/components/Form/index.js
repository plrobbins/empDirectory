import React, { Component } from "react";

class Form extends Component {
    //setting initial state
    state = {
        name: ""
    };

    //filter the names while user is typing
    handleInputChange = event => {
        const { name, value } = event.target;
        //updating state
        this.setState({
            [name]: value
        });
        console.log(value)
  
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        id="myInput"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }

}

export default Form;