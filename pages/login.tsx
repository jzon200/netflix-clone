import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const [login, setLogin] = useState(false)

  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      {/* Background Image Backdrop */}
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/574df980-9fb0-4924-b13b-7ef3a1bf3547/PH-en-20220411-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      {/* Netflix Logo */}
      <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
        <Image src="https://rb.gy/ek4j9f" layout="fill" objectFit="contain" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-sm  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="text-sm  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        <button
          type="submit"
          onClick={() => setLogin(true)}
          className="w-full rounded bg-[#e50914] px-4 py-3 text-lg font-bold"
        >
          Sign In
        </button>

        <div className="text-[#737373]">
          New to Netflix?{' '}
          <button
            type="submit"
            onClick={() => setLogin(false)}
            className="font-medium text-white"
          >
            Sign up now.
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
