function RegisterForm({groupsData, values, touched, errors, handleChange, handleSubmit, handleBlur, isValid, dirty}){
    return (
      <div className="col-span-1 bg-white p-12 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
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
          className="mb-5 w-full block shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <div className="error-wrapper h-5">
          {touched.repeatPassword && errors.repeatPassword && (
            <p className="text-sm-left text-red-300 mb-2">{errors.repeatPassword}</p>
          )}
        </div>
        <input
          placeholder="Confirm password"
          type="password"
          name="repeatPassword"
          className="mb-5 w-full block shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.repeatPassword}
        />
        <div className="error-wrapper h-5">
          {touched.fullName && errors.fullName && (
            <p className="text-sm-left text-red-300 mb-2">{errors.fullName}</p>
          )}
        </div>
        <input
          placeholder="Full name"
          type="text"
          name="fullName"
          className="mb-5 w-full block shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
        />
        <div className="error-wrapper h-5">
          {touched.group && errors.group && (
            <p className="text-sm-left text-red-300 mb-2">{errors.group}</p>
          )}
        </div>
        <div className="flex items-center mb-5">
          <p className="mb-0 text-white text-md font-bold mr-5">Group: </p>
          {
            !groupsData.isLoading && !groupsData.error &&
            <select defaultValue="" name="group" className="focus:outline-none focus:shadow-outline px-2 py-1 rounded-md" onChange={handleChange} onBlur={handleBlur}>
              <option disabled value="">Choose a group</option>
              {
                groupsData.data.data.map((group) => 
                  <option selected="selected" key={group.id} value={group.id}>{group.name}</option>
                )
              }
            </select>
          }
        </div>
        <button
          className="mb-5 w-full block bg-violet-500 px-5 py-2 rounded-lg font-bold text-white"
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type="submit"
        >
          sign up
        </button>
      </div>
    );
}

export default RegisterForm;