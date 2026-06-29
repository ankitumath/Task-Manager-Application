import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
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

            const res = await api.post("/auth/login", form);

            login(res.data);

            navigate("/dashboard");

        } catch (err) {

            alert(err.response?.data?.message || "Login Failed");
        }
    };

    return (

        <div className="min-h-screen flex justify-center items-center">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded p-8 w-96"
            >

                <h1 className="text-3xl font-bold mb-6">
                    Login
                </h1>

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
                    className="bg-green-600 text-white w-full py-2 rounded"
                >
                    Login
                </button>

            </form>

        </div>
    );
}