import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";

import shapeOne from "../../assets/shape-1.png";
import "./contact.css";
import { useState } from "react";
import axios from "axios";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/1e93d004-6d0e-40e7-a5a2-2bf222ebea3e",
        form
      )
      .then((response) => {
        console.log(response);

        setForm({ name: "", email: "", subject: "", message: "" });
      });
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Hubungi Saya</h2>
        <p className="section__subtitle">
          Mari <span>Membicarakan Ide Mudah Yang Tidak Ribet</span>
        </p>

        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegMap />
              </span>

              <h3 className="contact__card-title">Alamat</h3>
              <p className="contact__card-data">Jambi, Indonesia</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegUser />
              </span>

              <h3 className="contact__card-title">Freelance</h3>
              <p className="contact__card-data">Available Right Now</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegEnvelope />
              </span>

              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">xybourx@gmail.com</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegAddressBook />
              </span>

              <h3 className="contact__card-title">No.Telp</h3>
              <p className="contact__card-data">+6288286819860</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group grid">
              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">
                  Nama Lengkap <b>*</b>{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag text-cs">
                  Alamat Email-mu <b>*</b>{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  className="contact__form-input"
                />
              </div>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Subject <b>*</b>{" "}
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={form.subject}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag text-cs">
                Your Message <b>*</b>{" "}
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                value={form.message}
                className="contact__form-input"
              ></textarea>
            </div>

            <div className="contact__submit">
              <p>* Accept the terms and conditions.</p>
              <button type="submit" className="btn text-cs">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Contact Me</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
