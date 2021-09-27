import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import SimpleReactValidator from 'simple-react-validator';
import PhoneInput from 'react-phone-number-input/input';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setUserSurname(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.phone);
  };

  return (
    <>
      <section>
        <form>
          <h1 style={{ color: 'green' }}>Contact information</h1>
          <div className="userName">Name: </div>
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={handleUserNameChange}
          ></input>
          <br />
          <div className="surName">Surname: </div>
          <input
            type="text"
            name="user_surname"
            value={userSurname}
            onChange={handleSurnameChange}
          ></input>
          <div className="userName">Phone number: </div>
          <input
            defaultcountry="CZ"
            value={phone}
            type="number"
            onChange={handlePhone}
          ></input>
          <div className="userName">Comment: </div>
          <textarea id="story" rowx="5" cols="33"></textarea>
          <hr />
          <button
            disabled={
              userName.length === 0 || userSurname.length === 0 || phone === 0
                ? true
                : false
            }
          >
            Send
          </button>
          <br />
        </form>
      </section>
      <section>
        <div className="id">
          ID {userSurname.toUpperCase()}_{userName.toUpperCase()}
        </div>
        <div className="userName">
          {' '}
          Name: {userSurname} {userName}
        </div>
        <div className="phone"> Phone number: {phone}</div>
        <div className="comment"> Comment: {comment}</div>

        {/* <table className="table">
          <tbody className="tr">
            <thead className="th">ID</thead>
            <thead className="th">Name and Surname</thead>
            <thead className="th">PhoneNumber</thead>
            <thead className="th">Comment</thead>
          </tbody>
          <tr className="tr">
            {/*  <td>{id}</td> */}
        {/* <td className="td">
              {userName} {userSurname}
            </td>
            <td className="td">{phone}</td>
            <td className="td">{comment}</td>
          </tr>
        </table> */}
      </section>
    </>
  );
};

const App = () => (
  <>
    <div className="container">
      <section>
        <Form />
      </section>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
