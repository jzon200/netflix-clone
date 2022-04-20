import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
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
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={(event) => {
          event.preventDefault()
        }}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-bold">Sign In</h1>
        <div className="space-y-4">
          <label className="block">
            <input type="email" placeholder="Email" className="form-control" />
          </label>
          <label className="block">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] px-4 py-3 text-lg font-bold"
        >
          Sign In
        </button>

        <div className="text-[#737373]">
          New to Netflix?{' '}
          <button type="submit" className="font-medium text-white">
            <Link href="#">Sign up now.</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
