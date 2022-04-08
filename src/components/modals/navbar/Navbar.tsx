type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
		<p className= "text-base ml-2.5 font-normal dark:text-white">Brought to you by the folks 
		at {' '}
		  <a
		    href="https://txhumor.com/" target="_blank"
		    className="underline font-bold"
		  >
		    Texas Humor
		  </a>{' '}
		</p>
      </div>
      <hr></hr>
    </div>
  )
}