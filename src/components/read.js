import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Read() {

    const getData = () => {
        axios.get(`https://6151da0a4a5f22001701d4da.mockapi.io/nutemployee`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6151da0a4a5f22001701d4da.mockapi.io/nutemployee/${id}`)
            .then(() => {
                getData();
            })
    }

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://6151da0a4a5f22001701d4da.mockapi.io/nutemployee`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, name, email, CPF, birthdate, startDate, gender, team } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('CPF', CPF);
        localStorage.setItem('Birthdate', birthdate);
        localStorage.setItem('Start date', startDate);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Team', team);
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>CPF</Table.HeaderCell>
                        <Table.HeaderCell>Birthdate</Table.HeaderCell>
                        <Table.HeaderCell>Start date</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Team</Table.HeaderCell>
                        <Link to="/create">
                                    <Table.Cell>
                                        <Button>Create</Button>
                                    </Table.Cell>
                                </Link>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.CPF}</Table.Cell>
                                <Table.Cell>{data.birthdate}</Table.Cell>
                                <Table.Cell>{data.startDate}</Table.Cell>
                                <Table.Cell>{data.gender}</Table.Cell>
                                <Table.Cell>{data.team}</Table.Cell>
            
                                <Link to="/update">
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}