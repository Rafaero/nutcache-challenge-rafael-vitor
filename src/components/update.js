import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


export default function Update() {

    const [id, setID] = useState(null);

    const updateAPIData = () => {
        axios.put(`https://6151da0a4a5f22001701d4da.mockapi.io/nutemployee/${id}`, {
            name,
            email,
            CPF,
            birthdate,
            startDate,
            gender,
            team
        })
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setCPF(localStorage.getItem('CPF'));
        setBirthdate(localStorage.getItem('Birthdate'));
        setStartDate(localStorage.getItem('Start date'));
        setGender(localStorage.getItem('Gender'));
        setTeam(localStorage.getItem('Team'));

    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [gender, setGender] = useState('');
    const [team, setTeam] = useState('');

    return (
        <div>
            <Form className="create-form">
                <Form.Field>

                    <label>Name: </label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email: </label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>CPF: </label>
                    <input placeholder='CPF' value={CPF} onChange={(e) => setCPF(e.target.value)} />

                    <label>Birthdate: </label>
                    <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="date" placeholder="Date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                        </div>
                    </div>
                    <label>Start date: </label>
                    <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="date" placeholder="Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                    </div>

                    <label>Gender: </label>
                    <select class="ui dropdown">
                        <label>Start date: </label>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                    <label>Team: </label>
                    <select class="ui dropdown">
                        <option value="Mobile">Mobile</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                </Form.Field>
                    <Button onClick={updateAPIData} type='submit'>Update</Button>
            </Form>
        </div>
    )
}
