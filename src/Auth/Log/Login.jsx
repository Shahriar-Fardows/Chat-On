import { Card, CardBody, Input, Button, Typography, Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import useAuthContext from "../../Context/useAuthContext";

const Login = () => {
    const [type, setType] = useState("login");
    const {loginUser , createUser} = useAuthContext();

    const logIn = (e) => {
        e.preventDefault();
        console.log('login');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(() => {
            Swal.fire({
                text: 'Sign up successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
                // ...
                .then(() => {
                  return  <Navigate to='/home' />
                })
        })

        .catch(() => {
            Swal.fire({
                title: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'Try again'
            })
            // ..
        });
    };

    const singUp = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        const file = e.target.fileUpload.files[0];
        console.log(userName, email, password, file);

        createUser(email, password)
                .then(() => {
                    Swal.fire({
                        text: 'Sign up successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                })
                .catch(() => {
                    Swal.fire({
                        title: ' try agin!',
                        text: '',
                        icon: 'error',
                        confirmButtonText: 'Try again'
                    })
                });

    }



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

                                            secure and encrypted
                                        </Typography>
                                    </form>
                                </TabPanel>
                                <TabPanel value="signUp" className="p-0">
                                    <form onSubmit={singUp} className="mt-12 flex flex-col gap-4">
                                        <div className="w-full">
                                            <Input name="userName" label="User Name" />
                                        </div>
                                        <div className="w-full">
                                            <Input name="email" type="email" label="Email Address" />
                                        </div>
                                        <div className="w-full">
                                            <Input name="password" type="text" label="Password" />
                                        </div>
                                        <label htmlFor="">Upload Profile Pic</label>
                                        <div className="relative my-6">
                                            <input
                                                id="id-dropzone02"
                                                name="fileUpload"
                                                type="file"
                                                className="peer hidden"
                                                accept=".gif,.jpg,.png,.jpeg"
                                                multiple
                                            />
                                            <label
                                                htmlFor="id-dropzone02"
                                                className="flex cursor-pointer flex-col items-center gap-6 rounded border border-dashed border-slate-300 px-6 py-10 text-center"
                                            >
                                                <span className="inline-flex h-12 items-center justify-center self-center rounded bg-slate-100/70 px-3 text-slate-400">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-label="File input icon"
                                                        role="graphics-symbol"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-6 w-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                        />
                                                    </svg>
                                                </span>
                                                <p className="flex flex-col items-center justify-center gap-1 text-sm">
                                                    <span className="text-emerald-500 hover:text-emerald-500">
                                                        Upload media
                                                        <span className="text-slate-500"> or drag and drop </span>
                                                    </span>
                                                    <span className="text-slate-600"> PNG, JPG or GIF up to 10MB </span>
                                                </p>
                                            </label>
                                        </div>
                                        <Button type="submit" className="bg-blue-600" size="lg">Sign Up Now</Button>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center justify-center gap-2 font-medium opacity-60"
                                        >

                                            secure and encrypted
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