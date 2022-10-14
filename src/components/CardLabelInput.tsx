interface CardLabelInputProps {
  label: string;
  type: string;  
  inputId: string;
  width: string;
  pattern?: string;
}

function CardLabel(props: CardLabelInputProps) {
  return (
    <label
      htmlFor={props.inputId}
      className="absolute text-base peer-focus:bg-branco-gelo text-fundo-claro duration-300 transform
      -translate-y-5 scale-100 -top-1 origin-[0] peer-focus:px-2 peer-focus:text-azul-ufal
      peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
      peer-focus:peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:translate-x-1.5
      peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
    >
      {props.label}
    </label>
  )
}

export function CardLabelInput(props: CardLabelInputProps) {
  return (
      <div className="relative">
        <input 
          type={props.type}
          id={props.inputId}
          name={props.inputId}
          pattern={props.pattern}
          className={`block px-2.5 pb-2.5 pt-2.5 text-base text-fundo-claro bg-cinza-medio focus:bg-transparent
          max-h-11 rounded-lg appearance-none focus:outline-none
          focus:ring-0 focus:border-2 focus:border-azul-ufal peer ${props.width}`}
          placeholder=" "
          required
        />
        
        <CardLabel
          label={props.label}
          type={props.type}
          inputId={props.inputId}
          width={props.width}
          pattern={props.pattern}
        />
      </div>
  )
}