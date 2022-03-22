import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Brought to you by your friends 
		at {' '}
		<a
		  href="https://txhumor.com/"
		  className="underline font-bold"
		>
		  Texas Humor
		</a>{' '}
		, this is a Texas themed clone of an open source version of the word guessing game we all know and
        love {' '}
        <a
          href="https://github.com/CassTwoCorgs/Tex-Ordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
