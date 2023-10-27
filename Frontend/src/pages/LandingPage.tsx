
interface LandingPageProps{
  user : String
}

function LandingPage({user} : LandingPageProps) {
  return (
    <>
      <h1>Am home</h1>
      {user && <h1>{user}</h1>}
    </>
  )
}

export default LandingPage
