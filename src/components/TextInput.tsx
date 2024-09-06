import { FormEventHandler } from "react"

export default function TextInput(props: {
  placeholder: string
  label: string
  id: string
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
        onInput={props.onInput}
        id={props.id}
        placeholder={props.placeholder}
        className="border border-gray-500 p-2 rounded-md"
      />
    </div>
  )
}
