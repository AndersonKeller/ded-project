import { StyledField, StyledInput } from "./style";

interface Inputprops {
  label: string;
  register: {};
  type?: "text" | "password";
}
export function Input({ label, register, type }: Inputprops) {
  return (
    <StyledField>
      <label htmlFor="">{label}</label>
      <StyledInput type={type ? type : "text"} {...register} />
    </StyledField>
  );
}
