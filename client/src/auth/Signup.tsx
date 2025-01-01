import { Input } from "@/components/ui/input";
import { LockKeyhole, LucideLoader2, Mail, PhoneOutgoing, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";



const Signup = () => {

    const [input, setInput] = useState<SignupInputState>({
        fullname:"",
        email: "",
        password: "",
        contact:"",
    });

    const[errors, setErrors] = useState<Partial<SignupInputState>>({})

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        // form validation check start
        const result = userSignupSchema.safeParse(input);
        if(!result.success){
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }



        console.log(input);
    }

    const loading = false;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
                <div className="mb-4"><h1 className="font-bold text-2xl">MealMates</h1></div>

                <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
            </div> 
            </div> 



                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        { errors && <span className="text-xs text-red-500">{errors.email}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                        { errors && <span className="text-xs text-red-500">{errors.password}</span>}
                    </div>
                </div>

                <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Contact"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <PhoneOutgoing className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
            </div>
            </div>


                <div className="mb-10">
                    {
                        loading ? <Button disabled
                            type="submit"
                            className="w-full bg-orange hover:bg-hoverOrange"
                        ><LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please Wait
                        </Button> : (<Button
                            type="submit"
                            className="w-full bg-orange hover:bg-hoverOrange"
                        >
                            Signup
                        </Button>)
                    }

                </div>



                <Separator />
                <p className="mt-2">Already have an account? {" "}</p>
                <Link to="/login" className="text-blue-500">Login</Link>
            </form>
        </div>
    )
}

export default Signup