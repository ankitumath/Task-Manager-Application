import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/auth/register", form);

            alert("Registration Successful");

            navigate("/login");

        } catch (err) {

            alert(err.response?.data?.message || "Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow w-96"
            >

                <h1 className="text-3xl mb-6 font-bold">
                    Register
                </h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border w-full p-2 mb-4"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border w-full p-2 mb-4"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border w-full p-2 mb-4"
                    onChange={handleChange}
                />

                <button
                    className="bg-blue-600 text-white w-full py-2 rounded"
                >
                    Register
                </button>

            </form>

        </div>
    );
}