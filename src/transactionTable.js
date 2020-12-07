import React from 'react'

export default function TransactionTable (props) {
    return (
        <div>
        <table>
            <thead> 
                <tr>
                    <th>#</th>
                    <th>Timestamp</th>
                    <th>Action</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr> 
            </thead>
            <tbody>
                {   props.data.map (item => (
                        <tr key = {item.id}>
                            <td>{item.id}</td>
                            <td> {item.timestamp}</td>
                            <td> {item.action}</td>
                            <td> {item.description}</td>
                            <td> {item.amount}</td>
                            <td> {item.currency}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
        
    )
}