export default function TextInput(props: {
    placeholder: string,
    label: string,
    id: string
}) {
    return (
        <div className="flex flex-col gap-[0.5px]">
            <label htmlFor={props.id} className="font-semibold">{props.label}</label>
            <input type="text" id={props.id} placeholder={props.placeholder} className="border border-gray-500 p-2 rounded-md" />
        </div>
    )
}