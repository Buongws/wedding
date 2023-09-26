import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    Name: "",
    Number: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    Name: "",
    Number: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // clear error message for this input
    });
  };

  const validateForm = () => {
    let newErrors = {
      Name: user.Name.trim() === "" ? "Điền tên của bạn nha" : "",
      Number: user.Number.trim() === "" ? "Số điện thoại nữa nè" : "",
      Message:
        user.Message.trim() === "" ? "Gửi lời chúc cho tụi mình nha !" : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const getdata = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { Name, Number, Message } = user;
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
      alert("Cảm ơn bạn đã gửi lời chúc cho chúng mình !");
    } else {
      alert("Gửi thất bại");
    }
  };

  return (
    <>
      <div className="form">
        <div className="container-form">
          <form method="POST">
            <input
              type="text"
              name="Name"
              placeholder="Tên của bạn"
              value={user.Name}
              required
              className="input-form"
              onChange={handleInputChange}
            />
            {errors.Name && <div className="error-message">{errors.Name}</div>}

            <input
              type="text"
              name="Number"
              placeholder="SĐT của bạn"
              value={user.Number}
              required
              className="input-form"
              onChange={handleInputChange}
            />
            {errors.Number && (
              <div className="error-message">{errors.Number}</div>
            )}

            <textarea
              name="Message"
              placeholder="Lời chúc của bạn"
              value={user.Message}
              required
              className="input-form"
              onChange={handleInputChange}
            ></textarea>
            {errors.Message && (
              <div className="error-message">{errors.Message}</div>
            )}

            <button
              className="button-87 mb-[10px]"
              role="button"
              type="button"
              onClick={getdata}
            >
              Gửi tại đây
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
