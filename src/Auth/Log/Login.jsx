import { Card, CardBody, Input, Button, Typography, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../../Context/useAuthContext";

const Login = () => {
    const [type, setType] = useState("login");
    const { loginUser, createUser } = useAuthContext();
    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        console.log('login');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    text: 'Logged in successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then(() => {
                    navigate('/chat');
                })
            })
            .catch(() => {
                Swal.fire({
                    title: 'Invalid email or password!',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            });

        e.target.reset();
    };

    const signUp = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName, email, password);
        const user = {
            userName,
            email,
            password,
        };

        // post email or password on data base 
        fetch('http://localhost:5000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });

        if (password.length < 6 || password.length > 32) {
            Swal.fire({
                title: 'Password has to be between 6 and 32 characters!',
                icon: 'error',
                confirmButtonText: 'Try again'
            });
        } else {
            createUser(email, password)
                .then(() => {
                    Swal.fire({
                        text: 'Sign up successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        navigate('/chat');
                    });
                })
                .catch(() => {
                    Swal.fire({
                        title: 'Try again!',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    });
                });
        }
    };

    return (
        <div className="flex items-center">
            <div className="flex flex-1 w-1/2 bg-blue-600 p-10 h-[100vh] text-white flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Welcome to <span className="font-playAR">Chat-On</span>
                </h1>
                <div className="text-center mb-4">
                    <h2 className="text-2xl font-semibold mb-2">About Chat-On</h2>
                    <p className="mb-4">
                        <span className="font-playAR">Chat-On</span> is the latest, innovative chat platform designed to revolutionize the way you connect with your loved ones. With cutting-edge features and a user-friendly interface, <span className="font-playAR">Chat-On</span> ensures a seamless and enjoyable chatting experience.
                    </p>
                    <p className="mb-4">
                        Please note that <span className="font-playAR">Chat-On</span> is currently under development and is available as a beta version for test purposes. We appreciate your feedback and patience as we work towards making the platform perfect for you.
                    </p>
                    <p className="font-semibold">
                        Connect. Share. Enjoy. <span className="font-playAR">Chat-On</span> - Your new favorite chat platform.
                    </p>
                </div>
            </div>
            <div className="w-1/2 px-[15%]">
                <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4 font-playAR">Chat-On</h1>
                <Card className="w-full max-w-[24rem] ">
                    <CardBody>
                        <Tabs value={type} className="overflow-visible">
                            <TabsHeader className="relative z-0 ">
                                <Tab value="login" onClick={() => setType("login")}>
                                    Login
                                </Tab>
                                <Tab value="signUp" onClick={() => setType("signUp")}>
                                    Sign Up
                                </Tab>
                            </TabsHeader>
                            <TabsBody
                                className=""
                                animate={{
                                    initial: {
                                        x: type === "card" ? 400 : -400,
                                    },
                                    mount: {
                                        x: 0,
                                    },
                                    unmount: {
                                        x: type === "card" ? 400 : -400,
                                    },
                                }}
                            >
                                <TabPanel value="login" className="p-0">
                                    <form onSubmit={logIn} className="mt-12 flex flex-col gap-4">
                                        <div className="w-full">
                                            <Input name="email" type="email" label="Email Address" />
                                        </div>
                                        <div className="w-full">
                                            <Input name="password" type="text" label="Password" />
                                        </div>
                                        <Button type="submit" className="bg-blue-600" size="lg">Login Now</Button>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center justify-center gap-2 font-medium opacity-60"
                                        >
                                           Forget Your Password?
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center justify-center gap-2 font-medium opacity-60"
                                        >
                                            Secure and encrypted
                                        </Typography>
                                    </form>
                                </TabPanel>
                                <TabPanel value="signUp" className="p-0">
                                    <form onSubmit={signUp} className="mt-12 flex flex-col gap-4">
                                        <div className="w-full">
                                            <Input name="userName" label="User Name" />
                                        </div>
                                        <div className="w-full">
                                            <Input name="email" type="email" label="Email Address" />
                                        </div>
                                        <div className="w-full">
                                            <Input name="password" type="text" label="Password" />
                                        </div>
                                        <Button type="submit" className="bg-blue-600" size="lg">Sign Up Now</Button>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center justify-center gap-2 font-medium opacity-60"
                                        >
                                            Secure and encrypted
                                        </Typography>
                                    </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Login;
