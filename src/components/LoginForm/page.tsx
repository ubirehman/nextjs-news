export default function LoginForm({ handleSubmit }) {
  return (
    <div className='flex min-h-screen bg-gray-100 p-6'>
      <div className='mx-auto max-w-md rounded-lg bg-white max-h-[40vh] shadow-lg'>
        <div className='px-6 py-4'>
          <h2 className='text-3xl font-semibold text-gray-700'>Login</h2>
          <p className='mt-1 text-gray-600'>Please login to your account.</p>
        </div>
        <div className='px-6 py-4'>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <label className='block text-gray-700' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-2 w-full rounded bg-gray-200 px-3 py-2 text-gray-700 outline-none focus:bg-gray-300'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='mt-4'>
              <label className='block text-gray-700' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='mt-2 w-full rounded bg-gray-200 px-3 py-2 text-gray-700 outline-none focus:bg-gray-300'
                required
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
