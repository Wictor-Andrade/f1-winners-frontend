"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useAuth } from "@/providers";
import toast from "react-hot-toast";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  logo: ImageProps;
  title: string;
  description: string;
  logInButton: ButtonProps;
  forgotPassword: {
    text: string;
    url: string;
  };
  image: ImageProps;
  signUpText: string;
  signUpLink: {
    text: string;
    url: string;
  };
  footerText: string;
};

export type Login7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Login7 = (props: Login7Props) => {
  const {
    logo,
    title,
    description,
    logInButton,
    forgotPassword,
    image,
    signUpText,
    signUpLink,
    footerText,
  } = {
    ...Login7Defaults,
    ...props,
  };

  const { login, user } = useAuth();
  const navigate = useNavigate();

  if(user) navigate('/dashboard')

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember] = useState(true);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password, remember });
      toast.success("Login realizado com sucesso");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Algo deu errado');
    }
  };

  return (
      <section id="relume">
        <div className="relative grid min-h-screen grid-cols-1 justify-center overflow-auto lg:grid-cols-2">
          <div className="absolute left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-between">
            <a href={logo.url}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </div>
          <div className="relative mx-[5vw] flex items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
            <div className="mx-auto w-full max-w-sm">
              <div className="mb-6 text-center md:mb-8">
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
                <p className="md:text-md">{description}</p>
              </div>
              <form className="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2">
                    Email*
                  </Label>
                  <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </div>
                <div className="grid w-full grid-cols-1 items-center">
                  <div className="flex items-start justify-between">
                    <Label htmlFor="password" className="mb-2">
                      Password*
                    </Label>
                    <a href={forgotPassword.url} className="underline">
                      {forgotPassword.text}
                    </a>
                  </div>
                  <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Button
                      variant={logInButton.variant}
                      size={logInButton.size}
                      iconLeft={logInButton.iconLeft}
                      iconRight={logInButton.iconRight}
                      type="submit"
                  >
                    {logInButton.title}
                  </Button>
                </div>
              </form>
              <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
                <p>{signUpText}</p>
                <a href={signUpLink.url} className="underline">
                  {signUpLink.text}
                </a>
              </div>
            </div>
          </div>
          <div className="hidden bg-background-secondary lg:block">
            <img src={image.src} alt={image.alt} className="size-full object-cover" />
          </div>
          <footer className="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-start">
            <p className="text-sm">{footerText}</p>
          </footer>
        </div>
      </section>
  );
};

export const Login7Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  title: "Log In",
  description: "Bem vindo a central de campeões!",
  logInButton: {
    title: "Log in",
  },
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  footerText: "© 2024 Relume"
};
