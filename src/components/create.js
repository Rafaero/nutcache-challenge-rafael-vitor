import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


export default function Create() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [gender, setGender] = useState('');
    const [team, setTeam] = useState('');

    const postData = () => {
        axios.post(`https://6151da0a4a5f22001701d4da.mockapi.io/nutemployee`,
        {
            name,
            email,
            CPF,
            birthdate,
            startDate,
            gender,
            team,
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>

                    <label>Name: </label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <label>Email: </label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <label>CPF: </label>
                    <input placeholder='CPF' onChange={(e) => setCPF(e.target.value)} />

                    <label>Birthdate: </label>
                    <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="date" placeholder="Date" onChange={(e) => setBirthdate(e.target.value)} />
                        </div>
                    </div>
                    <label>Start date: </label>
                    <div class="ui calendar" id="example1">
                        <div class="ui input left icon">
                            <i class="calendar icon"></i>
                            <input type="date" placeholder="Date" onChange={(e) => setStartDate(e.target.value)} />
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
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
