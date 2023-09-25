import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    Name: "",
    Number: "",
    Message: "",
  });
  // Function to handle input changes and update the user state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const getdata = async (e) => {
    const { Name, Number, Message } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Number,
        Message,
      }),
    };
    const res = await fetch(
      "https://wedding-b1fa4-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Gửi thành công");
    } else {
      alert("Gửi thất bại");
    }
  };
  return (
    <>
      <div className="form">
        <div className="container">
          <form method="POST">
            <input
              type="text"
              name="Name"
              placeholder="Tên của bạn"
              value={user.Name}
              required
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="Number"
              placeholder="SĐT của bạn"
              value={user.Number}
              required
              onChange={handleInputChange}
            ></input>
            <textarea
              name="Message"
              placeholder="Lời chúc của bạn"
              value={user.Message}
              required
              onChange={handleInputChange}
            ></textarea>

            <button onClick={getdata}>GỬI TẠI ĐÂY</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
