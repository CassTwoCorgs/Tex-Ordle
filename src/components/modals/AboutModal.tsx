import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Howdy Amigo! 🤠 
		This is a clone of the word guessing game we all know and love modified by the folks 
		at {' '}
		<a
		  href="https://txhumor.com/"
		  className="underline font-bold"
		>
		  Texas Humor
		</a>{' '}
		. {' '}
        <a
          href="https://github.com/CassTwoCorgs/Tex-Ordle"
          className="underline font-bold"
        >
          Check out the code here!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
