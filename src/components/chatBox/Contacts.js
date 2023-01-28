import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios  from "axios";
import Logo from "../../assets/logo.svg";

export default function Contacts({ contacts, changeChat, }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [inputValue, setInputValue] = useState('');
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  // ###########################################################


  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      await axios.post('http://localhost:5000/user', { username: inputValue});
      setInputValue(''); 
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <h5>logo</h5>
            <h3>chat</h3>
          </div>
          
          <div className="newsearch">
          <form onSubmit={handleSubmit}>
      <input placeholder="Search for user" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button type="submit">search</button>
    </form>
          </div>
          <div className="contacts">
            {contacts
              .filter((contact) => contact.username === inputValue)
              .map((contact, index) => {
                return (
                  <div
                    key={contact._id}
                    className={`contact ${
                      index === currentSelected ? "selected" : ""
                    }`}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt=""
                      />
                    </div>
                    <div className="username">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                );
              })}
          </div>

  {/* <div className="contacts">
    {contacts
      .filter((contact) => inputValue.startsWith("@") ? contact.username.includes(inputValue.substring(1)) : contact.username === inputValue)
      .map((contact, index) => {
        return (
          <div
            key={contact._id}
            className={`contact ${
              index === currentSelected ? "selected" : ""
            }`}
            onClick={() => changeCurrentChat(index, contact)}
          >
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                alt=""
              />
            </div>
            <div className="username">
              <h3>{contact.username}</h3>
            </div>
          </div>
        );
      })}
  </div> */}


          <div></div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
display: grid;
grid-template-rows: 10% 7% 65%;
overflow: hidden;
background-color: #080420;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 2rem;
  }
  h3 {
    color: white;
    text-transform: uppercase;
  }
}

.newsearch{
  display:flex;
  align-items:center;
  position:relative;
  left 3rem;
}
.newsearch input{
  width: 75%;
  height:2.3rem;
  border-radius:25px;
}
.newsearch input:focus{
  outline:none;
}
.newsearch form{
  display:flex;
  flex-wrap:no-wrap;
}
.newsearch button{
  position: relative;
  height: 1.9rem;
  right: 4.4rem;
  top: 0.2rem;
  border-radius:25px;
  background:#0d0d30;
  color:white;
  
}
.newsearch button:hover{
  height:2rem;
  right:4.5rem;
  
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 0.8rem;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .contact {
    background-color: #ffffff34;
    min-height: 5rem;
    cursor: pointer;
    width: 90%;
    border-radius: 0.2rem;
    padding: 0.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: 0.5s ease-in-out;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 {
        color: white;
      }
    }
  }
  .selected {
    background-color: #9a86f3;
  }
}
.current-user {
  background-color: #0d0d30;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .avatar {
    img {
      height: 4rem;
      max-inline-size: 100%;
    }
  }
  .username {
    h2 {
      color: white;
    }
  }
  @media screen and (min-width: 720px)  {
    gap: 0.5rem;
    .username {
      h2 {
        font-size: 1rem;
      }

    }
  .newsearch form{
    display:flex;
    flex-wrap:wrap;
  }
  }
}
`;