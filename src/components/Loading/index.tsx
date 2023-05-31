import { StyledLoading } from "./style";

export function Loading() {
  return (
    <StyledLoading>
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
      <p>Loading...</p>
    </StyledLoading>
  );
}
