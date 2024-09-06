import { FormEventHandler } from "react"

export default function TextInput(props: {
  label: string
  id: string
  value: string
  onInput: FormEventHandler
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.id}
        className="font-semibold"
      >
        {props.label}
      </label>
      <input
        type="text"
        value={props.value}
        onInput={props.onInput}
        id={props.id}
        className="border border-gray-500 p-2 rounded-md"
      />
    </div>
  )
}
