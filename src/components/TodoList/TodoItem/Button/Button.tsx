/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import { ReactComponent as CheckedSvg } from 'icons/checked.svg';
import { ReactComponent as UncheckedSvg } from 'icons/unchecked.svg';
import { ReactComponent as RemoveSvg } from 'icons/remove.svg';

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

type CheckboxLabelProps = {
  checked?: boolean;
};

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00000013;

  ${({ checked }) => checked && 'color: #5c5cb3'}
`;

type CheckboxProps = {
  checked?: boolean;
  onChange: () => void;
};

// custom icons
export const Checkbox = ({ checked, onChange }: CheckboxProps) => (
  <CheckboxLabel checked={checked}>
    {checked ? (
      <CheckedSvg width="2.5rem" height="2.5rem" />
    ) : (
      <UncheckedSvg width="2.5rem" height="2.5rem" />
    )}
    <StyledInput type="checkbox" onChange={onChange} />
  </CheckboxLabel>
);

type RemoveButtonProps = {
  onClick: () => void;
};

const StyledButton = styled.button`
  padding: 0;
  border: 0;
  background: 0;
  color: #c927275e;
  width: 3rem;
  height: 3rem;

  :hover {
    color: #c9272794;
  }
`;

export const RemoveButton = ({ onClick }: RemoveButtonProps) => (
  <StyledButton onClick={onClick}>
    <RemoveSvg width="1.5rem" height="1.5rem" />
  </StyledButton>
);
