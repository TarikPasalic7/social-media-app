function Profile () {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='rounded-full border p-[2px]
          w-16 h-16' src='https://www.w3schools.com/howto/img_avatar.png' alt='src'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Heafer</h2>
        <h3 className='text-sm text-gray-50'>Welcome to Snoopy</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default Profile
