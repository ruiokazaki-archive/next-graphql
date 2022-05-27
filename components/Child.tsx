import { ChangeEvent, FormEvent, memo, VFC } from 'react'

type Props = {
  printMsg: () => void
}

export const Child: VFC<Props> = ({ printMsg }) => {
  return (
    <>
      {console.log('Child rendered')}
      <p>Child Component</p>
      <button
        className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
        onClick={printMsg}
      >
        click
      </button>
    </>
  )
}

export const ChildMemo = memo(Child)
