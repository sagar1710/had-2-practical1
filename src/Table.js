import React, { Component } from 'react';
class Table_had extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Student_name_had</th>
                        <th>Roll_no</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sagar</td>
                        <td>74</td>
                        <td>sycs</td>
                    </tr>
                    <tr>
                        <td>yash</td>
                        <td>79</td>
                        <td>syit</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const Table = () => {
    return (
        <h1>this is function</h1>
    );
}

export default Table_had;
export {
    Table
}