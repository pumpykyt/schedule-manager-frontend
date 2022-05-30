function LoginForm({values, touched, errors, handleChange, handleSubmit, handleBlur, isValid, dirty}){
    return (
      <div className="col-span-1 bg-white p-36 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
        <p className="text-white font-semibold text-4xl text-center mb-5">
          Schedule Manager App
        </p>
        <div className="error-wrapper h-5">
          {touched.email && errors.email && (
            <p className="text-sm-left text-red-300 mb-2">{errors.email}</p>
          )}
        </div>
        <input
          placeholder="Email"
          type="text"
          name="email"
          className="mb-5 w-full block shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <div className="error-wrapper h-5">
          {touched.password && errors.password && (
            <p className="text-sm-left text-red-300 mb-2">{errors.password}</p>
          )}
        </div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          className="mb-10 w-full block shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <button
          className="mb-5 w-full block bg-violet-500 px-5 py-2 rounded-lg font-bold text-white"
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type="submit"
        >
          sign in
        </button>
        <div className="grid grid-cols-2">
          <div className="grid">
            <p className="mb-0 text-white">Don`t have an account?</p>
            <p className="mb-0 text-indigo-300 font-bold cursor-pointer">
              Register here
            </p>
          </div>
        </div>
      </div>
    );
}

export default LoginForm;